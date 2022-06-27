import './employee.css';

const Employee = ({ employee }) => {
    return (
        <article className='employee'>
            <div>{employee.name}</div>
            <div>{employee.job_title}</div>
            <div>{employee.department}</div>
            <div>{employee.company_name}</div>
            <div>{employee.experience_in_job}</div>
        </article>
    )
}

export default Employee
