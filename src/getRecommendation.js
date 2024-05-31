import {requests, competencies, courses} from './data.js'

let found_courses = []

var idxMulti = lunr(function () {
  this.use(lunr.multiLanguage('en', 'ru'));
  this.field('request');
  for (let request of requests) {
    this.add(request);
  }
})


define('test', ['core/ajax', 'core/utils'], function (Ajax) {
  const searchListCourses = document.querySelector('#list-courses')
  // const searchRequests = []

  const displayListCourses = (query, searchData, seach_type) => {
    const listFound = idxMulti.search(query)
    let maximumNumberMatches = 0
    // console.log(listFound)

    let idsFound = listFound.filter(item => {
      if (Object.keys(listFound[0].matchData.metadata).length > 1) {
        if (Object.keys(item.matchData.metadata).length > 1 && maximumNumberMatches <= Object.keys(item.matchData.metadata).length) {
          maximumNumberMatches = Object.keys(item.matchData.metadata).length
          return true
        } else {
          return false
        }
      } else {
        if (item.score > 2.0) {
          return true
        } else {
          return false
        }
      }
    }).map(item => +item.ref)

    if (idsFound.length === 0) {
      idsFound = listFound.map(item => +item.ref)
    }

    const coursesFound = new Set([])
    for (const key in searchData) {
      if (Object.hasOwnProperty.call(searchData, key)) {
        const idsCourse = searchData[key]
        idsCourse.forEach(id => {
          if (idsFound.includes(id)) {
            coursesFound.add(key)
          }
        })
      }
    }

    const names_requests = requests.find((item) => +item.id === idsFound[0])?.request

    // let names_requests = ''
    // searchRequests.forEach((request) => {
    //   names_requests += ';' + request
    // })
    // names_requests = names_requests.slice(1)


    let names_courses = ''
    coursesFound.forEach((course) => {
      names_courses += ';' + course
    })
    names_courses = names_courses.slice(1)

    if (names_courses.length !== 0) {
      Ajax.call([{
        methodname: 'local_course_recommendation_courses',
        args: {
          names_courses: names_courses,
          names_requests: names_requests,
          seach_type: seach_type
        }
      }])[0].then((courses) => {
        courses = JSON.parse(courses)

        searchListCourses.innerHTML = ''
        if (courses.length !== 0) {
          for (let course of courses) {
            // console.log(course)
            const node = `
                <div class="course">
                    <div class="card-wrapper md:flex">
                        <a href="${course['viewurl']}" target="_blank" tabindex="-1">
                            <div class="card-wrapper-image" style=''>
                            </div>
                        </a>
                        <div class="card-wrapper-content">
                            <div class="card-wrapper-content-header">
                                <p class="title">${course['name']}</p>
                                <p class="subtitle">Компетенции: ${course['competencies']}</p>

                                  <div class="subtitle" style="display: flex; justify-content: space-between;">
                                    <div>Преподаватель: ${course['teacher']}</div>
                                    <div>Рейтинг курса: ${course['rating']}</div>
                                  </div>

                            </div>
                            <div class="card-wrapper-content-body">
                                <div class="body-content">
                                    <div>
                                        <div class="body-btn-info">${course['direction']}</div>
                                        <div class="body-btn-info">ВолгГТУ</div>
                                    </div>
                                    <a href="${course['viewurl']}" target="_blank" class="body-btn-more">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            searchListCourses.insertAdjacentHTML('beforeend', node)
          }
        } else {
          const node = `<h3 style="text-align: center;">Ничего не найдено</h3>`
          searchListCourses.insertAdjacentHTML('beforeend', node)
        }
        // console.log(courses)
      })
    } else {
      searchListCourses.innerHTML = ''
      const node = `<h3 style="text-align: center;">Ничего не найдено</h3>`
      searchListCourses.insertAdjacentHTML('beforeend', node)
    }

    // console.log(coursesFound)
  }
  return {
    displayListCourses: displayListCourses
  }
})

require(['test'], (func) => {
  const courseSearchForm = document.querySelector('#course-search-form')
  const competencySearchForm = document.querySelector('#competency-search-form')
  const searchCoursesContainer = document.querySelector('#search-courses-container')
  const queryCoursesString = document.querySelector('#request-search-courses')
  const searchCompetenciesContainer = document.querySelector('#search-competencies-container')
  const queryCompetenciesString = document.querySelector('#request-search-competencies')
  const popularQueries = document.querySelectorAll('.popular-queries')
  const errorMessage = document.querySelector('#error-valid')
  const searchListCourses = document.querySelector('#list-courses')
  

  competencySearchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    searchCoursesContainer.classList.remove('error-input')
    const query = queryCompetenciesString.value

    if (query.length !== 0) {
      errorMessage.classList.add('display-none')
      searchCompetenciesContainer.classList.remove('error-input')
      func.displayListCourses(query, competencies, 'Поиск по компетенциям')
    } else {
      searchListCourses.innerHTML = ''
      errorMessage.classList.remove('display-none')
      searchCompetenciesContainer.classList.add('error-input')
    }
  })

  courseSearchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    searchCompetenciesContainer.classList.remove('error-input')
    const query = queryCoursesString.value
    
    if (query.length !== 0) {
      errorMessage.classList.add('display-none')
      searchCoursesContainer.classList.remove('error-input')
      func.displayListCourses(query, courses, 'Поиск по курсам')
    } else {
      searchListCourses.innerHTML = ''
      errorMessage.classList.remove('display-none')
      searchCoursesContainer.classList.add('error-input')
    }
  })

  popularQueries.forEach((tag) => {
    tag.addEventListener('click', (event) => {
      event.preventDefault()
      const query = event.target.innerText
      func.displayListCourses(query, courses, 'Поиск по курсам')
    })
  })
})