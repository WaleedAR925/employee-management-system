const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "ali@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create the login page UI and make it responsive.",
        taskDate: "2026-08-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Dashboard Layout",
        taskDescription: "Fix spacing and alignment issues on the employee dashboard.",
        taskDate: "2026-08-27",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Create a responsive navigation bar for the application.",
        taskDate: "2026-08-25",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update User Profile",
        taskDescription: "Add profile editing functionality for employees.",
        taskDate: "2026-08-23",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Ahmed",
    email: "ahmed@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Employee Cards",
        taskDescription: "Design employee information cards for the dashboard.",
        taskDate: "2026-08-28",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Search Feature",
        taskDescription: "Add a search feature to find employees quickly.",
        taskDate: "2026-08-27",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare UI Components",
        taskDescription: "Create reusable button and input components.",
        taskDate: "2026-08-24",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Usman",
    email: "usman@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Form",
        taskDescription: "Create a form for adding new employees.",
        taskDate: "2026-08-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Validate Form Inputs",
        taskDescription: "Add validation for employee form fields.",
        taskDate: "2026-08-26",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Employee Table",
        taskDescription: "Create a table showing all employee information.",
        taskDate: "2026-08-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Table Responsiveness",
        taskDescription: "Make the employee table responsive on smaller screens.",
        taskDate: "2026-08-21",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Add Sorting Feature",
        taskDescription: "Allow employees to sort the table by different fields.",
        taskDate: "2026-08-20",
        category: "Development"
      }
    ]
  },

  {
    id: 4,
    firstName: "Hamza",
    email: "hamza@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports Page",
        taskDescription: "Build a page for viewing employee and task reports.",
        taskDate: "2026-08-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Filters",
        taskDescription: "Add filters for active, completed and failed tasks.",
        taskDate: "2026-08-27",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Reports UI",
        taskDescription: "Create the initial design for the reports section.",
        taskDate: "2026-08-24",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Dashboard Cards",
        taskDescription: "Create cards displaying task statistics.",
        taskDate: "2026-08-23",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Add Export Feature",
        taskDescription: "Add functionality to export employee reports.",
        taskDate: "2026-08-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dashboard",
        taskDescription: "Update dashboard statistics and improve the layout.",
        taskDate: "2026-08-18",
        category: "UI/UX"
      }
    ]
  },

  {
    id: 5,
    firstName: "Bilal",
    email: "bilal@company.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Task System",
        taskDescription: "Implement the basic task creation and assignment system.",
        taskDate: "2026-08-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Connect Local Storage",
        taskDescription: "Store employee and task data using local storage.",
        taskDate: "2026-08-27",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Task Cards",
        taskDescription: "Create reusable cards for displaying employee tasks.",
        taskDate: "2026-08-25",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Task Categories",
        taskDescription: "Add categories to help organize employee tasks.",
        taskDate: "2026-08-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Implement Notifications",
        taskDescription: "Add notifications when new tasks are assigned.",
        taskDate: "2026-08-19",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Task Updates",
        taskDescription: "Test task status updates across the employee dashboard.",
        taskDate: "2026-08-28",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Task Card Design",
        taskDescription: "Improve spacing and styling of task cards.",
        taskDate: "2026-08-17",
        category: "UI/UX"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@company.com",
    password: "123"
  }
];
export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const empData = JSON.parse(localStorage.getItem("employees"))
    const admData = JSON.parse(localStorage.getItem("admin"))

    return {
        employees: empData,
        admin: admData
    }
}