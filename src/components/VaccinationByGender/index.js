// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccineByGender = props => {
  const {vaccinationByGender} = props

  return (
    <div className="vaccine-container">
      <h1 className="pie-chart-title">Vaccination By gender</h1>
      <div>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius="60%"
            outerRadius="100%"
            dataKey="count"
            width={500}
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="down"
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccineByGender
