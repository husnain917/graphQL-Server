import { gql } from '@apollo/client';



export const GET_ENROLLMENT = gql`
query EnrollmentApprovals {
  enrollmentApprovals {
    studentName
    id
    email
    course
    paymentMethod
    amount
    transactionId
    status
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
}`

export const GET_FAQS = gql`
query FindManyEvents {
  faqs {
    id
    faqAnswer
    faqQuestion
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
query FindManyEvents {
  findManySuccessStories {
    id
    freelancingProfileUrl
    paymentProof
    description
    status
    totalEarnedAmount
    city
    whyReject
  }
}`


export const GET_USERS = gql`
query Query {
  users {
    id
    name
    email
    address
    phone
    role
    cnic
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
query Query {
  findManyCourses {
    id
    courseName
    courseDesc
    courseIntro
    instructorId
    courseCategoryId
    createdAt
    updateAt
    courseStatus
    whatYouLearn
    coursePrice
  }
}`