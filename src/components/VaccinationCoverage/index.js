// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  console.log(last7DaysVaccination)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${number / 1000}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccine-coverage-container">
      <h1 className="vaccine-coverage-title">Vaccination Coverage</h1>

      <BarChart
        data={last7DaysVaccination}
        margin={{top: 50}}
        width={1000}
        height={300}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{stroke: '#6c757d', strokeWidth: 1}}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: '#6c757d', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 10}} />
        <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
