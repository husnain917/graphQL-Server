import { gql } from "@apollo/client";



export const ADD_ENROLMMENT_APPROVAL = gql`
mutation CreateEnrollmentApproval($data: EnrollmentApprovalCreateInput!) {
  createEnrollmentApproval(data: $data) {
    id
    userId
    coursesId
    status
    paymentMethod
    amount
    transactionId
  }
}
`;



export const ADD_STAFF = gql`
mutation CreateManyStaff($data: [StaffCreateManyInput!]!) {
  createManyStaff(data: $data) {
    count
  }
}`


export const ADD_COURSES = gql`
mutation CreateCourses($data: CoursesCreateInput!) {
  createCourses(data: $data) {
    id
    courseName
    courseDesc
    courseIntro
    instructorId
    courseCategoryId
    coursePrice
    whatYouLearn
    courseStatus
    createdAt
    updateAt
    instructor {
      id
      name
    }
  }
}
`
export const ADD_STUDENT = gql`
mutation CreateManyStudents($data: [StudentsCreateManyInput!]!) {
  createManyStudents(data: $data) {
    count
  }
}`

export const ADD_SUCCESS_STORY = gql`
mutation CreateSuccessStories($data: SuccessStoriesCreateInput!) {
  createSuccessStories(data: $data) {
    id
    freelancingProfileUrl
    paymentProof
    description
    status
    totalEarnedAmount
    city
    whyReject
  }
}
`

export const ADD_EVENTS = gql`
mutation CreateEvents($data: EventsCreateInput!) {
  createEvents(data: $data) {
    eventName
    eventDesc
    eventImage
    eventDate
    speakerId
    eventStatus
  }


}`


export const ADD_CONTACT_US = gql`
mutation Mutation($data: [ContactUsCreateManyInput!]!) {
  createManyContactUs(data: $data) {
    count
  }
}`

export const ADD_FAQS = gql`
mutation CreateFaq($data: FaqCreateInput!) {
  createFaq(data: $data) {
    faqQuestion
    faqAnswer
    courseId
    createdAt
    updateAt
    course {
      courseName
      courseDesc
      courseIntro
      instructorId
      courseCategoryId
      coursePrice
    }
  }

}`





//SINGLE DELETE MUTATIONS

export const DELETE_SINGLE_STAFF = gql`

mutation DeleteStaff($where: StaffWhereUniqueInput!) {
  deleteStaff(where: $where) {
    name
  }
}`

export const DELETE_SINGLE_STUDENT = gql`
mutation DeleteStudents($where: StudentsWhereUniqueInput!) {
  deleteStudents(where: $where) {
    name
  }
}`


export const DELETE_SINGLE_COURSE = gql`
mutation DeleteCourses($where: CoursesWhereUniqueInput!) {
  deleteCourses(where: $where) {
    id
    courseDesc
    courseName
    courseIntro
    instructorId
    courseCategoryId
    organizationId
    coursePrice
    whatYouLearn
    courseStatus
    createdAt
    updateAt
  }
}
`

export const DELETE_ENROLMMENT_APPROVAL = gql`
mutation DeleteEnrollmentApproval($where: EnrollmentApprovalWhereUniqueInput!) {
  deleteEnrollmentApproval(where: $where) {
    id
    userId
    coursesId
    status
    paymentMethod
    amount
    transactionId
  }
}
`


export const DELETE_CONTACT = gql`
mutation DeleteMutation($where: ContactUsWhereUniqueInput!) {
  deleteContactUs(where: $where) {
    name
  }
}
`

export const DELETE_SINGLE_SUCCESS_STORY = gql`
mutation DeleteSuccessStories($where: SuccessStoriesWhereUniqueInput!) {
  deleteSuccessStories(where: $where) {
    id
    freelancingProfileUrl
    paymentProof
    description
    totalEarnedAmount
    status
    city
    whyReject
  }
}
`

export const DELETE_SINGLE_EVENT = gql`
mutation DeleteEvents($where: EventsWhereUniqueInput!) {
  deleteEvents(where: $where) {
    id
    eventName
    eventImage
    eventDesc
    eventDate
    speakerId
    eventStatus
  }
}
`

export const DELETE_SINGLE_FAQ = gql`
mutation DeleteFaq($where: FaqWhereUniqueInput!) {
  deleteFaq(where: $where) {
    id
    faqQuestion
    faqAnswer
    courseId
    createdAt
    updateAt
    course {
      courseName
      id
      courseDesc
    }
  }
}
`



//UPDATE SINGLE MUTATIONS

export const UPDATE_SINGLE_SUCCESS = gql`
mutation UpdateSuccessStories($where: SuccessStoriesWhereUniqueInput!, $data: SuccessStoriesUpdateInput!) {
  updateSuccessStories(where: $where, data: $data) {
    id
  }

}`


export const UPDATE_SINGLE_STAFF = gql`
mutation UpdateStaff($data: StaffUpdateInput!, $where: StaffWhereUniqueInput!) {
  updateStaff(data: $data, where: $where) {
    id
  }


}`

export const UPDATE_SINGLE_COURSE = gql`
mutation UpdateCourses($data: CoursesUpdateInput!, $where: CoursesWhereUniqueInput!) {
  updateCourses(data: $data, where: $where) {
    id
    courseName
    courseDesc
    courseIntro
    instructorId
    courseCategoryId
    organizationId
    whatYouLearn
    coursePrice
    courseStatus
    createdAt
    updateAt
  }
}
`

export const UPDATE_SINGLE_FAQ = gql`
mutation UpdateFaq($data: FaqUpdateInput!, $where: FaqWhereUniqueInput!) {
  updateFaq(data: $data, where: $where) {
    id
    faqQuestion
    faqAnswer
    courseId
    createdAt
    updateAt
    course {
      id
      courseName
      courseIntro
      courseDesc
    }
  }
}
`


export const UPDATE_SINGLE_STUDENT = gql`
mutation UpdateStudents($data: StudentsUpdateInput!, $where: StudentsWhereUniqueInput!) {
  updateStudents(data: $data, where: $where) {
    id
  }
}`

export const UPDATE_USER = gql`
mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    name
  }
}`


// {  "data": {
//   "password": {
//     "set": null
//   }
// },
// "where": {
// "id": null
// }
// }


export const UPDATE_SINGLE_ENROLLMENT = gql`
mutation UpdateEnrollmentApproval($data: EnrollmentApprovalUpdateInput!, $where: EnrollmentApprovalWhereUniqueInput!) {
  updateEnrollmentApproval(data: $data, where: $where) {
    id
    userId
    coursesId
    status
    paymentMethod
    amount
    transactionId
  }

}`

export const UPDATE_SINGLE_CONTACT = gql`
mutation UpdateContactUs($data: ContactUsUpdateInput!, $where: ContactUsWhereUniqueInput!) {
  updateContactUs(data: $data, where: $where) {
    id
  }
}`

export const UPDATE_SINGLE_EVENT = gql`
mutation UpdateEvents($data: EventsUpdateInput!, $where: EventsWhereUniqueInput!) {
  updateEvents(data: $data, where: $where) {
    id
  }
}`






export const ACTIVE_USER = gql`
mutation GetActiveUser($token: String!) {
  getActiveUser(token: $token) {
    id
    name
    email
    address
    contact
    secretKeyId
    token
    role
  }

}`