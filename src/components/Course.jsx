const Course = ({course}) => {
    console.log(course)
    const parts = course.parts
    const total = parts.reduce((accumulator, current) => {
      accumulator += current.exercises
      console.log(accumulator)
      return accumulator
    },0)
    return <div>
      <h1>{course.name}</h1>
        {course.parts.map(c => 
          <p key={c.id} >
            {c.name} {c.exercises}
          </p>)}
          <b>
            Total of {total} exercises
          </b>
    </div>
  }

  export default Course