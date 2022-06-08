import { gql } from '@apollo/client';



export const GET_ENROLLMENT = gql`
query EnrollmentApprovals {
  enrollmentApprovals {
    id
    userId
    coursesId
    status
    amount
    transactionId
    paymentMethod
  }
}
`;
export const GET_EVENTS = gql`
query FindManyEvents {
  findManyEvents {
    id
    eventName
    eventDesc
    eventImage
    eventDate
    speakerId
    eventStatus
  }
}
`

export const GET_FAQS = gql`
query Faqs {
  faqs {
    id
    faqQuestion
    faqAnswer
    courseId
    createdAt
    updateAt
  }
}
`

export const GET_STAFF = gql`
query FindManyEvents {
  findManyStaff {
    id
    name
    email
    role
    phone
  }
}`

export const GET_STUDENT = gql`
query FindManyEvents {
  findManyStudents {
    id
    name
    status
    email
  }
}`

export const GET_SUCCESS_STORIES = gql`
query FindManySuccessStories {
  findManySuccessStories {
    freelancingProfileUrl
    id
    paymentProof
    description
    status
    totalEarnedAmount
    city
    whyReject
  }
}
`


export const GET_USERS = gql`
query Query {
  users {
    id
    name
    email
    cnic
    address
    contact
    role
  }
}
`


export const GET_MESSAGE = gql`
query Query {
  contactuses {
    id
    name
    subject
    message
    status
    reply
  }
}`


export const GET_COURSES = gql`
query Query{
  findManyCourses {
    id
    courseName
    courseDesc
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


export const GET_CONTACT_US = gql`
query Query {
  contactuses {
    name
    subject
    message
    id
    status
    reply
  }
}`

export const GET_COURSE_CATEGORY = gql`
query Categories {
  categories {
    id
    categoryName
  }
}
`