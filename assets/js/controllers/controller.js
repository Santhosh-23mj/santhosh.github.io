// About Controller
portfolio.controller('aboutController', function ($scope) {
    $scope.aboutData = {
        summary : "About Summary!!",
        name : "SanthoshKumar",
        designation : "Intern",
        email : "santhosh23mj@gmail.com",
        phone : 8531007707,
        address : "ADDRESS..."
    };
})

// Experience Controller
portfolio.controller('experienceController', function ($scope) {
    $scope.experienceData = [];

    var internship1 = {
        companyName : "PSG Software Technologies",
        position : "Intern",
        fromDate : new Date(2021,12, 14),
        toDate : new Date(),
        summary : "Intern Summary...",
        tasks : [
            "",
            "",
            ""
        ],
        type: "regular"
    };
    $scope.experienceData.push(internship1);
})

// Education Controller
portfolio.controller('educationController', function ($scope) {
    $scope.educationData = [];
    
    var sslc = {
        name : "Chinmaya Vidyalaya",
        degree: "SSLC",
        specialization : null,
        score : "97%",
        from : 2014,
        to : 2015
    };
    var hsc = {
        name : "Chinmaya Vidyalaya",
        degree: "HSC",
        specialization : "Computer Science & Mathematics",
        score : "92%",
        from : 2016,
        to : 2017
    };
    var college = {
        name : "Sri Ramakrishna Institute of Technology",
        degree: "B.E",
        specialization : "Computer Science Engineering",
        cgpa : "8.4",
        from : 2017,
        to : 2021
    };
    $scope.educationData.push(college);
    $scope.educationData.push(hsc);
    $scope.educationData.push(sslc);
})

// Skills Controller
portfolio.controller('skillsController', function ($scope) {
    $scope.skillsData = {
        technical : [],
        nonTechnical : []
    };
})

//Activities Controller
portfolio.controller('activitiesController', function ($scope) {
    $scope.activitiesData = {
        workshops : []
    }
})

// Achievements Controller
portfolio.controller('achievementsController', function ($scope) {
    $scope.achievementsData = {
        certifications : [],
        academicActivities : [],
        other : []
    };
    
    var pythonCertification = {
        name: "The Joy of Computing Using Python",
        description : "About the certification",
        certifiedBy : "NPTEL",
        date : new Date(),
        url : ""
    };
    $scope.achievementsData["certifications"].push(pythonCertification);

    var googleCloud = {
        name: "30 Days of Google Cloud Program",
        description : "About the program",
        issuedBy : "Google Cloud",
        url : "",
        date : new Date()
    }
    $scope.achievementsData["academicActivities"].push(googleCloud);
    
    var technoSpark = {
        event : "Technospark",
        activity : "Organize",
        description : "Organized TechnoSpark, a fun technical event in Tekace, a National Level Technical Symposium held at our College."
    }
    $scope.achievementsData.other.push(technoSpark);
    // $scope.achievementsData.push("Organized TechnoSpark, a fun technical event in Tekace, a National Level Technical Symposium held at our College.");
    // $scope.achievementsData.push("Won 1 st Place in Kingpin, in SRiSHTi 2k19, a National Level Technical Symposium held at PSG Institute of Technology.")
})

// Projects Controller
portfolio.controller('projectsController', function ($scope) {
    $scope.projects = [];

    var logalyzer = {
        name : "Logalyzer",
        desc : "Analyze web logs",
        tech : "Python3",
        url : ""
    }

    $scope.projects.push(logalyzer);
})