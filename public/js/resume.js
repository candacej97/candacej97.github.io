var resumeInfo = {
  "name": "Candace Johnson",
  "contactInformation": [ {
    "address": "Queens, NY",
    "email": "mailto:candacejohnson@nyu.edu",
    "phoneNumber": "",
    "github": "https://github.com/candacej97",
    "website": "https://candacej97.github.io"
  } ],
  "education": [ {
    "school": "College of Arts and Science, New York University",
    "graduationDate": "May 2019",
    "major": "Computer Science",
    "minor": "Web Programming and Applications"
  } ],
  "workExperience": [ {
      "recent1": [ {
        "jobTitle": "Application Support",
        "department": "NYU IT",
        "employer": "NYU",
        "startAndEnd": "August 2017 - PRESENT",
        "description": [ "Ideate and formulate accurate training materials specific to applications", "Host training sessions for end users", "Respond to user queries" ]
      } ],
      "recent2": [ {
        "jobTitle": "Student Technology Assistant",
        "department": "NYU IT",
        "employer": "NYU",
        "startAndEnd": "September 2016 - August 2017",
        "description": [ "Provided troubleshooting and consultation services for computer software, hardware, and general services offered by the Student Technology Centers", "Created promotional material for services and events that were held by the Student Technology Centers", "Kept instructional material up to date" ]
      } ],
      "recent3": [ {
        "jobTitle": "Assistant Director of Visual Media",
        "department": "Media Ministry",
        "employer": "United Apostolic Church",
        "startAndEnd": "May 2013 - PRESENT",
        "description": [ "Volunteer Work", "Overall in charge of visual graphics and announcements projected on multiple monitors", "Record and edit services", "Create promotional materials for events", "Develop a church website and social presence" ]
      } ]
  } ],
  "skills": [ {
    "languages": [ "HTML", "CSS", "JavaScript", "SQL", "Java", "Python", "PHP", "C" ],
    "frameworks": [ "Bootstrap 3", "jQuery" ]
  } ]
};

var jsonStr = JSON.stringify(resumeInfo);
// document.getElementById('resume').innerHTML = jsonStr;
