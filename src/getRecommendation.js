const courses = {
  'Базы данных': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  'Управление данными': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  'Защита информации': [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  'Безопасность информационных технологий и систем': [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  'Информационная безопасность': [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  'Инженерная документация': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  'Анализ требований к ИС': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 229, 230, 231, 232, 233, 234, 235, 236],
  'Интеллектуальные промышленные технологии': [41, 42, 43, 44, 45, 46, 47],
  'Информатика': [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
  'Основы программирования': [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 119, 120, 121, 122, 123, 124, 125, 131, 132, 133, 134, 135, 136],
  'Основы проектной деятельности': [41, 42, 43, 44, 45, 46, 47, 119, 120, 121, 122, 123, 124, 125, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 238, 239, 240, 241, 242, 243],
  'Основы системного программного обеспечения': [41, 42, 43, 44, 45, 46, 47, 73, 74, 268, 75, 76, 77, 78, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 148, 149, 150, 151, 152, 153, 154, 155, 156],
  'Системы поддержки принятия решений': [41, 42, 43, 44, 45, 46, 47],
  'Вычислительные методы': [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 116, 117, 118],
  'Информационные технологии': [41, 42, 43, 44, 45, 46, 47],
  'Методы оптимизации': [41, 42, 43, 44, 45, 46, 47, 116, 117, 118],
  'Теория информационных процессов и систем': [41, 42, 43, 44, 45, 46, 47],
  'Проектирование интеллектуальных информационных систем': [41, 42, 43, 44, 45, 46, 47],
  'Разработка информационно-аналитических систем': [41, 42, 43, 44, 45, 46, 47, 73, 74, 268, 75, 76, 77, 78, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 131, 132, 133, 134, 135, 136],
  'Компьютерное зрение и обработка сигналов': [48, 49, 50, 51, 52, 53, 54, 55, 56, 126, 127, 128, 129, 130, 209],
  'Машинно-зависимые языки': [48, 49, 50, 51, 52, 53, 54, 55, 56],
  'Основы языков программирования': [48, 49, 50, 51, 52, 53, 54, 55, 56, 119, 120, 121, 122, 123, 124, 125],
  'Теория алгоритмов': [48, 49, 50, 51, 52, 53, 54, 55, 56],
  'Информатика и программирование': [48, 49, 50, 51, 52, 53, 54, 55, 56, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
  'Стандартизация, сертификация и управление качеством программного обеспечения': [48, 49, 50, 51, 52, 53, 54, 55, 56, 196, 212, 213, 214, 215, 216, 217],
  'Математические основы формальных рассуждений и теория алгоритмов': [48, 49, 50, 51, 52, 53, 54, 55, 56],
  'Основы инженерии знаний': [48, 49, 50, 51, 52, 53, 54, 55, 56],
  'Компьютерная лингвистика': [57, 58, 59, 61, 62, 63, 64, 65, 126, 127, 128, 129, 130],
  'Основы информационной культуры': [57, 58, 59, 61, 62, 63, 64, 65],
  'Информационная культура студента': [57, 58, 59, 61, 62, 63, 64, 65],
  'Киберфизические системы и технологии': [66, 67, 68, 69, 70, 71, 72, 73, 74, 268, 75, 76, 77, 78],
  'Системы конструкторского и технологического проектирования': [66, 67, 68, 69, 70, 71, 72, 73, 74, 268, 75, 76, 77, 78],
  'Предметно-ориентированные экономические информационные системы': [66, 67, 68, 69, 70, 71, 72, 73, 74, 268, 75, 76, 77, 78],
  'Качество и надежность программного обеспечения': [66, 67, 68, 69, 70, 71, 72, 73, 74, 268, 75, 76, 77, 78, 196, 212, 213, 214, 215, 216, 217, 267],
  'Моделирование систем': [73, 74, 268, 75, 76, 77, 78, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125],
  'Технологии программирования': [73, 74, 268, 75, 76, 77, 78, 119, 120, 121, 122, 123, 124, 125, 196, 212, 213, 214, 215, 216, 217, 267, 238, 239, 240, 241, 242, 243],
  'Системы геометрического моделирования': [73, 74, 268, 75, 76, 77, 78],
  'Методы и средства проектирования информационных систем и технологий': [73, 74, 268, 75, 76, 77, 78, 88, 89, 90, 91, 92, 93, 131, 132, 133, 134, 135, 136],
  'Программная инженерия': [73, 74, 75, 76, 77, 78, 119, 120, 121, 122, 123, 124, 125],
  'Проектирование информационных систем': [73, 74, 75, 76, 77, 78],
  'Разработка мобильных приложений': [106, 107, 108, 109, 110, 111, 112, 113, 114, 115],
  'Объектно-ориентированный анализ и программирование': [73, 74, 268, 75, 76, 77, 78, 119, 120, 121, 122, 123, 124, 125, 131, 132, 133, 134, 135, 136],
  'Основы разработки WEB-приложений': [73, 74, 268, 75, 76, 77, 78],
  'Проектирование человеко-машинного взаимодействия': [73, 74, 268, 75, 76, 77, 78, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 238, 239, 240, 241, 242, 243],
  'Проектная деятельность': [73, 74, 268, 75, 76, 77, 78, 131, 132, 133, 134, 135, 136],
  'Технологии разработки программно-информационных систем': [73, 74, 268, 75, 76, 77, 78, 119, 120, 121, 122, 123, 124, 125, 196, 212, 213, 214, 215, 216, 217, 267, 238, 239, 240, 241, 242, 243],
  'Коммуникация в социальных сетях': [60, 79, 80, 81, 82],
  'Машинное обучение и анализ данных': [60, 79, 80, 81, 82],
  'Нейронные сети': [60, 79, 80, 81, 82, 209, 126, 127, 128, 129, 130],
  'Основы анализа данных': [60, 79, 80, 81, 82],
  'Анализ данных': [60, 79, 80, 81, 82, 116, 117, 118],
  'Введение в машинное обучение': [60, 79, 80, 81, 82, 126, 127, 128, 129, 130, 265],
  'Основы машинного обучения': [60, 79, 80, 81, 82, 126, 127, 128, 129, 130, 265],
  'Компьютерная графика': [83, 84, 85, 86, 87],
  'Мультимедийные и игровые технологии': [83, 84, 85, 86, 87],
  'Машинная графика': [83, 84, 85, 86, 87],
  'Мобильные и встраиваемые технологии': [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115],
  'Архитектура информационных систем': [88, 89, 90, 91, 92, 93],
  'Операционные системы': [94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
  'Администрирование информационных систем': [94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
  'Свободное ПО': [94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
  'Основы системного анализа и теории управления': [116, 117, 118],
  'Системы компьютерной математики': [116, 117, 118],
  'Моделирование процессов и систем': [116, 117, 118],
  'Дискретная математика': [116, 117, 118],
  'Основы математического моделирования и анализа данных': [116, 117, 118],
  'Разработка приложений с графическим интерфейсом': [119, 120, 121, 122, 123, 124, 125],
  'Информационные системы': [119, 120, 121, 122, 123, 124, 125],
  'Основы процедурных языков программирования': [119, 120, 121, 122, 123, 124, 125, 131, 132, 133, 134, 135, 136, 265],
  'Программирование': [119, 120, 121, 122, 123, 124, 125],
  'Системы искусственного интеллекта': [126, 127, 128, 129, 130],
  'Интеллектуальные информационные системы и технологии': [126, 127, 128, 129, 130],
  'Интеллектуальный анализ данных': [126, 127, 128, 129, 130, 209],
  'Введение в объектно-ориентированное программирование': [131, 132, 133, 134, 135, 136],
  'Введение в объектно-ориентированный анализ': [131, 132, 133, 134, 135, 136],
  'Программирование учетно-ориентированных задач': [131, 132, 133, 134, 135, 136, 179, 180, 181, 182, 183, 184, 185],
  'Управление проектами': [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 238, 239, 240, 241, 242, 243],
  'Управление ИТ-проектами': [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 238, 239, 240, 241, 242, 243],
  'Информационные технологии управления проектами': [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147],
  'WEB-программирование': [148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178],
  'Основы WEB технологий': [148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178],
  'Веб-дизайн': [148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178],
  'Основы разработки WEB-приложений': [148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178],
  'Основы системной инженерии': [179, 180, 181, 182, 183, 184, 185],
  'Управление корпоративной информацией': [179, 180, 181, 182, 183, 184, 185],
  'Параллельные и распределенные вычисления': [186, 187, 188, 189, 190, 191, 257],
  'Тестирование и отладка программного обеспечения': [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206],
  'Тестирование информационных систем': [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206],
  'Тестирование и оценка качества систем искусственного интеллекта': [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206],
  'Тестирование программного обеспечения': [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206],
  'Корпоративные информационные системы': [210, 211],
  'Управление ресурсами предприятия в среде 1С_ERP': [210, 211],
  'Программирование в среде 1С': [210, 211],
  'Основы теории систем и системного анализа': [212, 213, 214, 215, 216, 217, 267],
  'Качество и надежность ИС': [196, 212, 213, 214, 215, 216, 217, 267],
  'Распределенный контроль версий кода': [218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228],
  'Разработка и анализ требований к программному обеспечению': [229, 230, 231, 232, 233, 234, 235, 236],
  'Моделирование программного обеспечения': [237],
  'Управление IT-проектами': [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 238, 239, 240, 241, 242, 243],
  'Основы управления IT-проектами': [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 238, 239, 240, 241, 242, 243],
  'Технологии обработки информации': [60, 79, 244, 245],
  'Теория графов': [246, 247, 248, 249],
  'Основы технологий быстрого прототипирования': [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147],
  'Управление киберфизическими системами': [66, 67, 68, 69, 70, 71, 72, 73, 74, 268, 75, 76, 77, 78],
  'Анализ больших данных': [60, 79, 82, 62, 63, 245, 250],
  'Архитектура вычислительных систем': [98, 251, 252, 253, 254, 255, 256, 266],
  'Производственная практика: Научно-исследовательская работа': [258, 259, 260, 261, 262, 263, 264],
}

const competencies = {
  "ПК-1 Владение классическими концепциями и моделями менеджмента в управлении проектами": [238, 239, 240, 241, 242, 243],
  "ПК-2 Владение методами контроля проекта и готовностью осуществлять контроль версий": [218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228],
  "ПК-3 Готовность к использованию методов и инструментальных средств исследования объектов профессиональной деятельности": [186, 187, 188, 189, 190, 191, 257, 73, 74, 75, 76, 77, 78, 246, 247, 248, 249, 88, 89, 90, 91, 92, 93, 131, 132, 133, 134, 135, 136],
  "ПК-4 Способность готовить презентации, оформлять научно-технические отчеты по результатам выполненной работы, публиковать результаты исследований в виде статей и докладов на научно-технических конференциях": [258, 259, 260, 261, 262, 263, 264],
  "ПК-5 Владение навыками моделирования, анализа и использования формальных методов конструирования программного обеспечения": [83, 84, 85, 86, 87, 229, 230, 231, 232, 233, 234, 235, 236],
  "ПК-6 Способность создавать программные интерфейсы": [148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178],
  "ПК-7 Владение навыками использования операционных систем, сетевых технологий, средств разработки программного интерфейса, применения языков и методов формальных спецификаций, систем управления базами данных": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 210, 211, 265, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
  "ПК-8 Владение навыками использования различных технологий разработки программного обеспечения": [186, 187, 188, 189, 190, 191, 257, 73, 74, 75, 76, 77, 78, 246, 247, 248, 249, 88, 89, 90, 91, 92, 93, 257, 131, 132, 133, 134, 135, 136],
  "ПК-9 Владение концепциями и атрибутами качества программного обеспечения (надежности, безопасности, удобства использования), в том числе роли людей, процессов, методов, инструментов и технологий обеспечения качества": [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208],
  "ПК-10 Владение стандартами и моделями жизненного цикла": [229, 230, 231, 232, 233, 234, 235, 236],
  "ПК-11 Владение навыками применения моделей и методов искусственного интеллекта для решения трудно формализуемых задач": [79, 80, 81, 82, 209, 126, 127, 128, 129, 130],
  "ПК-2 Способен принимать участие в организации ИТ-инфраструктуры и управлении информационной безопасностью": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], //!!!
  "ПК-4 Способен выполнять работы и управлять работами по созданию (модификации) и сопровождению информационными системами, автоматизирующих задачи организационного управления и бизнес-процессы": [179, 180, 181, 182, 183, 184, 185, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178], //!!!
  "ПК-5 Способность проводить обследование организаций, выявлять информационные потребности пользователей, формировать требования к информационной систем": [66, 67, 68, 69, 70, 71, 72],
  "ПК-6 Способность разрабатывать и адаптировать прикладное программное обеспечение": [179, 180, 181, 182, 183, 184, 185, 88, 89, 90, 91, 92, 93, 257],
  "ПК-7 Способность проектировать информационные системы по видам обеспечения": [73, 157, 158, 159, 160, 161, 162, 165, 167, 168, 169, 170, 171, 176, 177, 178],
  "ПК-9 Способность моделировать прикладные бизнеспроцессы и предметную область": [116, 117, 118],
  "ПК-1 Способность проводить исследования на всех этапах жизненного цикла программных средств": [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147],
  "ПК-2 Способность выполнять интеграцию программных модулей и компонент": [134, 135, 73, 266, 88, 89, 90, 91, 92, 93],
  "ПК-3 Способность оценивать качество программного обеспечения, в том числе проведение тестирования и исследование результатов": [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208],
  "ПК-4 Способность выполнять работы по обеспечению функционирования баз данных и обеспечению их информационной безопасности": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  "ПК-5 Способность выполнять работы по созданию (модификации) и сопровождению информационных систем": [179, 180, 181, 182, 183, 184, 185, 265, 210, 211, 159, 73, 88, 89, 90, 91, 92, 93, 66, 67, 68, 69, 70, 71, 72, 48, 49, 50, 51, 52, 53, 54, 55, 56],
  "ПК-6 Способность создания технической документации на продукцию в сфере информационных технологий, управления технической информацией": [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  "ПК-8 Способность применять методы поиска,  сбора, обработки, передачи и хранения информации, технические и программные средства осуществления информационных процессов в строительстве; выполнять работы по созданию информационных моделей объектов в строительстве; использовать прикладное программное обеспечение для решения практических инженерных задач в области строительства": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 57, 58, 59, 60, 61, 62, 63, 64, 65],
  "ПК-1 Способен классифицировать и идентифицировать задачи искусственного интеллекта, выбирать адекватные методы и инструментальные средства решения задач искусственного интеллекта": [79, 80, 81, 82],
  "ПК-3 Способен осуществлять концептуальное моделирование проблемной области и проводить формализацию представления знаний в системах искусственного интеллекта": [],
  "ПК-4 Способен разрабатывать и применять методы машинного обучения для решения задач": [79, 80, 81, 82],
  "ПК-2 Способен разрабатывать и тестировать программные компоненты решения задач в системах искусственного интеллекта": [126, 127, 128, 129, 130, 207, 208],
  "ПК-5 Способен использовать инструментальные средства для решения задач машинного обучения": [126, 127, 128, 129, 130, 207, 208],
  "ПК-6 Способен создавать и поддерживать системы искусственного интеллекта на основе нейросетевых моделей и методов": [126, 127, 128, 129, 130, 207, 208],
  "ПК-8 Способен разрабатывать системы анализа больших данных": [79, 80, 81, 82],
  "ПК-10 Способен создавать и поддерживать средства автоматизации проектирования систем искусственного интеллекта": [126, 127, 128, 129, 130, 207, 208], //!!!!
}

const requests = [
  {"id": 1, "request": "архитектура БД"},
  {"id": 2, "request": "архитектура базы данных"},
  {"id": 3, "request": "базы данных"},
  {"id": 4, "request": "база данных"},
  {"id": 5, "request": "MySql"},
  {"id": 6, "request": "бд"},
  {"id": 7, "request": "субд"},
  {"id": 8, "request": "SQLite"},
  {"id": 9, "request": "MongoDb"},
  {"id": 10, "request": "SQL"},
  {"id": 11, "request": "язык запросов"},
  {"id": 12, "request": "нормализация БД"},
  {"id": 13, "request": "нормализация базы данных"},
  {"id": 14, "request": "нормализация данных"},
  {"id": 15, "request": "создание базы данных"},
  {"id": 16, "request": "создание БД"},
  {"id": 17, "request": "сопровождение БД"},
  {"id": 18, "request": "сопровождение базы данных"},
  {"id": 19, "request": "доработка БД"},

  {"id": 20, "request": "безопасность веб приложений"},
  {"id": 21, "request": "безопасность web приложений"},
  {"id": 22, "request": "защита данных"},
  {"id": 23, "request": "защита атак"},
  {"id": 24, "request": "защита взлома"},
  {"id": 25, "request": "защита системы"},
  {"id": 26, "request": "безопасность веб приложения"},
  {"id": 27, "request": "безопасность web приложения"},
  {"id": 28, "request": "защита информации"},
  {"id": 29, "request": "безопасность данных"},
  {"id": 30, "request": "безопасность системы"},

  {"id": 31, "request": "разбираться документация"},
  {"id": 32, "request": "составлять документацию ПО"},
  {"id": 33, "request": "составлять документацию программному обеспечиванию"},
  {"id": 34, "request": "документация программы"},
  {"id": 35, "request": "документация ПО"},
  {"id": 36, "request": "составление документации"},
  {"id": 37, "request": "составление документов"},
  {"id": 38, "request": "формирование документации"},
  {"id": 39, "request": "формирование документов"},
  {"id": 40, "request": "понимание документации"},

  {"id": 41, "request": "решать комплексные задачи"},
  {"id": 42, "request": "решение поставленных задач"},
  {"id": 43, "request": "принятие решений"},
  {"id": 44, "request": "поставленные цели"},
  {"id": 45, "request": "выполнение задач"},
  {"id": 46, "request": "создание собственных решений"},
  {"id": 47, "request": "выполнение сложных задач"},

  {"id": 48, "request": "алгоритмы"},
  {"id": 49, "request": "структура данных"},
  {"id": 50, "request": "алгоритм"},
  {"id": 51, "request": "структуры данных"},
  {"id": 52, "request": "нетривиальные алгоритмы"},
  {"id": 53, "request": "эффективные алгоритмы"},
  {"id": 54, "request": "написание алгоритмов"},
  {"id": 55, "request": "сложность алгоритма"},
  {"id": 56, "request": "оценка сложности алгоритма"},

  {"id": 57, "request": "изучать информацию"},
  {"id": 58, "request": "поиск данных"},
  {"id": 59, "request": "поиск информации"},
  {"id": 61, "request": "разбор данных"},
  {"id": 62, "request": "обрабатывать данные"},
  {"id": 63, "request": "обрабатывать информацию"},
  {"id": 64, "request": "парсинг данных"},
  {"id": 65, "request": "Интернет"},

  {"id": 66, "request": "автоматизация бизнес процессов"},
  {"id": 67, "request": "автоматизация бизнес процесса"},
  {"id": 68, "request": "автоматизация процессов"},
  {"id": 69, "request": "автоматизация задач"},
  {"id": 70, "request": "автоматизация процесса проектирования"},
  {"id": 71, "request": "автоматизация процесса"},
  {"id": 72, "request": "автоматизация задач"},

  {"id": 73, "request": "проектирование системы"},
  {"id": 74, "request": "SOLID"},
  {"id": 75, "request": "шаблоны проектирования"},
  {"id": 76, "request": "принципы проектирования"},
  {"id": 77, "request": "создание модели"},
  {"id": 78, "request": "модель"},

  {"id": 60, "request": "анализировать данные"},
  {"id": 79, "request": "анализ данных"},
  {"id": 80, "request": "machine learning"},
  {"id": 81, "request": "машинное обучение"},
  {"id": 82, "request": "Big Data"},

  {"id": 83, "request": "3D моделирование"},
  {"id": 84, "request": "работа графикой"},
  {"id": 85, "request": "компьютерное моделирование"},
  {"id": 85, "request": "компьютерная графика"},
  {"id": 86, "request": "моделирование"},
  {"id": 87, "request": "графика"},

  {"id": 88, "request": "микросервисная архитектура"},
  {"id": 89, "request": "архитектура ПО"},
  {"id": 90, "request": "архитектура системы"},
  {"id": 91, "request": "современная архитектура"},
  {"id": 92, "request": "чистая архитектура"},
  {"id": 93, "request": "архитектура приложения"},

  {"id": 94, "request": "системное администрирование"},
  {"id": 95, "request": "Linux"},
  {"id": 96, "request": "Windows"},
  {"id": 97, "request": "Ubuntu"},
  {"id": 98, "request": "системный администратор"},
  {"id": 99, "request": "ОСИ"},
  {"id": 100, "request": "Shell скрипты"},
  {"id": 101, "request": "командная строка"},
  {"id": 102, "request": "Bash-скрипты"},
  {"id": 103, "request": "операционная система"},
  {"id": 104, "request": "Mac"},
  {"id": 105, "request": "командная строка"},

  {"id": 106, "request": "приложения андроид"},
  {"id": 107, "request": "android разработка"},
  {"id": 108, "request": "создание мобильных приложений"},
  {"id": 109, "request": "мобильные приложения"},
  {"id": 110, "request": "разработка мобильных приложений"},
  {"id": 111, "request": "язык программирования Kotlin"},
  {"id": 112, "request": "android"},
  {"id": 113, "request": "мобильная разработка"},
  {"id": 114, "request": "мобильное приложение"},
  {"id": 115, "request": "андроид"},

  {"id": 116, "request": "математика"},
  {"id": 117, "request": "линейная алгебра"},
  {"id": 118, "request": "математическй анализ"},

  {"id": 119, "request": "разработка ПО"},
  {"id": 120, "request": "разработка программ"},
  {"id": 121, "request": "разработка программного обеспечения"},
  {"id": 122, "request": "основы программирования"},
  {"id": 123, "request": "основы программной разработки"},
  {"id": 124, "request": "программные средства"},
  {"id": 125, "request": "разбираться чужой код"},

  {"id": 126, "request": "нейронная сеть"},
  {"id": 127, "request": "нейронные сети"},
  {"id": 128, "request": "нейронных сетей"},
  {"id": 129, "request": "искусственный интеллект"},
  {"id": 130, "request": "neuron network"},

  {"id": 131, "request": "библиотеки разработки"},
  {"id": 132, "request": "разработка библиотек"},
  {"id": 133, "request": "ООП"},
  {"id": 134, "request": "функциональное программирование"},
  {"id": 135, "request": "объектно ориентированное программирование"},
  {"id": 136, "request": "паттерны программирования"},

  {"id": 137, "request": "система управления проектами"},
  {"id": 138, "request": "Trello"},
  {"id": 139, "request": "управление командой"},
  {"id": 140, "request": "использование Kanban"},
  {"id": 141, "request": "Kanban доска"},
  {"id": 142, "request": "планирование работы"},
  {"id": 143, "request": "организация работы"},
  {"id": 143, "request": "методология разработки"},
  {"id": 144, "request": "гибкие методологии"},
  {"id": 145, "request": "Agile"},
  {"id": 146, "request": "методология"},
  {"id": 147, "request": "Scrum"},

  {"id": 148, "request": "веб разработка"},
  {"id": 149, "request": "разработка веб приложений"},
  {"id": 150, "request": "разработка клиент серверного приложения"},
  {"id": 151, "request": "веб"},
  {"id": 152, "request": "web"},
  {"id": 153, "request": "web разработка"},
  {"id": 154, "request": "веб приложение"},
  {"id": 155, "request": "web система"},
  {"id": 156, "request": "web приложение"},
  {"id": 157, "request": "язык гипертекстовой разметки HTML"},
  {"id": 158, "request": "язык программирования CSS"},
  {"id": 159, "request": "язык программирования JavaScript"},
  {"id": 160, "request": "верстка сайтов"},
  {"id": 161, "request": "фреймворк React"},
  {"id": 162, "request": "framework Django"},
  {"id": 163, "request": "веб программирование"},
  {"id": 164, "request": "архитектура web приложения"},
  {"id": 165, "request": "Frontend"},
  {"id": 166, "request": "архитектура веб приложения"},
  {"id": 167, "request": "фреймворк Vue"},
  {"id": 168, "request": "фреймворк React"},
  {"id": 169, "request": "язык программирования Typescript"},
  {"id": 170, "request": "язык программирования PHP"},
  {"id": 171, "request": "фреймворк Laravel"},
  {"id": 172, "request": "программные интерфейсы"},
  {"id": 173, "request": "разработка сайтов"},
  {"id": 174, "request": "язык программирования JS"},
  {"id": 175, "request": "cms"},
  {"id": 176, "request": "фреймворк Spring"},
  {"id": 177, "request": "фреймворк ASP"},
  {"id": 178, "request": "фреймворк NET"},

  {"id": 179, "request": "Enterprise backend"},
  {"id": 180, "request": "backend"},
  {"id": 181, "request": "бэкэнд"},
  {"id": 182, "request": "развертывание системы"},
  {"id": 183, "request": "Docker"},
  {"id": 184, "request": "deploy"},
  {"id": 185, "request": "диплой"},

  {"id": 186, "request": "параллельное программирование"},
  {"id": 187, "request": "Multithreading"},
  {"id": 188, "request": "asynchronous programming"},
  {"id": 189, "request": "ассинхронное программирование"},
  {"id": 190, "request": "написание ассинхронного кода"},
  {"id": 191, "request": "многопоточность"},

  {"id": 192, "request": "тестирование"},
  {"id": 193, "request": "тестирование ПО"},
  {"id": 194, "request": "тестирование программы"},
  {"id": 195, "request": "тестирование программного обеспечения"},
  {"id": 196, "request": "Обеспечение отказоустойчивости ПО"},
  {"id": 197, "request": "Тестирование приложений"},
  {"id": 198, "request": "отладка"},
  {"id": 199, "request": "отладка ПО"},
  {"id": 200, "request": "отладка программного обеспечения"},
  {"id": 201, "request": "TDD"},
  {"id": 202, "request": "интеграционное тестирование"},
  {"id": 203, "request": "пирамида тестирования"},
  {"id": 204, "request": "юнит тесты"},
  {"id": 205, "request": "тестирование системы"},
  {"id": 206, "request": "системное тестирование"},
  {"id": 207, "request": "тестирование нейронных сетей"},
  {"id": 208, "request": "оценка нейронных сетей"},

  {"id": 209, "request": "Object detection"},
  {"id": 210, "request": "язык программирования 1C"},
  {"id": 211, "request": "1с разработка"},

  {"id": 212, "request": "качество ПО"},
  {"id": 213, "request": "качество программы"},
  {"id": 214, "request": "качество системы"},
  {"id": 215, "request": "принципы качественной программы"},
  {"id": 216, "request": "устойчивость системы"},
  {"id": 217, "request": "гибкость системы"},

  {"id": 218, "request": "Git"},
  {"id": 219, "request": "система Git"},
  {"id": 220, "request": "система контроля версий"},
  {"id": 221, "request": "гит"},
  {"id": 222, "request": "GitLab"},
  {"id": 223, "request": "Git Hub"},
  {"id": 224, "request": "git flow"},
  {"id": 225, "request": "контроль версий проекта"},
  {"id": 226, "request": "git"},
  {"id": 227, "request": "git lab"},
  {"id": 228, "request": "гит хаб"},

  {"id": 229, "request": "внедрение системы в эксплуатацию"},
  {"id": 230, "request": "поддержка системы"},
  {"id": 231, "request": "ведение системы"},
  {"id": 232, "request": "ввод системы"},
  {"id": 233, "request": "управление проектом"},
  {"id": 234, "request": "управление системой"},
  {"id": 235, "request": "создавание программных систем"},
  {"id": 236, "request": "сопровождение программных систем"},

  {"id": 237, "request": "диаграмма классов"},

  {"id": 238, "request": "Руководство командой"},
  {"id": 239, "request": "Развитие навыков командной работы"},
  {"id": 240, "request": "работа команде"},
  {"id": 241, "request": "Работа группах над проектом"},
  {"id": 242, "request": "командная разработка"},
  {"id": 243, "request": "групповая разработка"},

  {"id": 244, "request": "визуализация данных"},
  {"id": 245, "request": "обработка данных"},

  {"id": 246, "request": "теория графов"},
  {"id": 247, "request": "графы"},
  {"id": 248, "request": "поиск в графах"},
  {"id": 249, "request": "граф"},

  {"id": 250, "request": "большие данные"},

  {"id": 251, "request": "устройство компьютера"},
  {"id": 252, "request": "устройство ЭВМ"},
  {"id": 253, "request": "ЭВМ"},
  {"id": 254, "request": "составляющие компьютера"},
  {"id": 255, "request": "железо компьтера"},
  {"id": 256, "request": "детали компьютера"},

  {"id": 257, "request": "clean architecture"},

  {"id": 258, "request": "создание презентаций"},
  {"id": 259, "request": "выступать презентацией"},
  {"id": 260, "request": "представление презентаций"},
  {"id": 261, "request": "доработка презентаций"},
  {"id": 262, "request": "презентация"},
  {"id": 263, "request": "составление презентаций"},
  {"id": 264, "request": "подготовка доклада"},

  {"id": 265, "request": "язык программирования python"},
  {"id": 266, "request": "Архитектура ЭВМ"},
  {"id": 267, "request": "оценка качества ПО"},
  {"id": 268, "request": "принципы SOLID"},
]

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
    console.log(listFound)

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
            console.log(course)
            const node = `
                <div class="course">
                    <div class="card-wrapper md:flex">
                        <a href="${course['viewurl']}" tabindex="-1">
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
                                    <a href="${course['viewurl']}" class="body-btn-more">Подробнее</a>
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
        console.log(courses)
      })
    } else {
      searchListCourses.innerHTML = ''
      const node = `<h3 style="text-align: center;">Ничего не найдено</h3>`
      searchListCourses.insertAdjacentHTML('beforeend', node)
    }

    console.log(coursesFound)
  }
  return {
    displayListCourses: displayListCourses
  }
})

require(['test'], (func) => {
  const courseSearchForm = document.querySelector('#course-search-form')
  const competencySearchForm = document.querySelector('#competency-search-form')
  const queryCoursesString = document.querySelector('#request-search-courses')
  const queryCompetenciesString = document.querySelector('#request-search-competencies')
  const popularQueries = document.querySelectorAll('.popular-queries')

  competencySearchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const query = queryCompetenciesString.value
    func.displayListCourses(query, competencies, 'Поиск по компетенциям')
  })

  courseSearchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const query = queryCoursesString.value
    func.displayListCourses(query, courses, 'Поиск по курсам')
  })

  popularQueries.forEach((tag) => {
    tag.addEventListener('click', (event) => {
      event.preventDefault()
      const query = event.target.innerText
      func.displayListCourses(query, courses, 'Поиск по курсам')
    })
  })
})