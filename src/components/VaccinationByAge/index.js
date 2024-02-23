// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccineByGender = props => {
  const {vaccineByAge} = props

  return (
    <div className="vaccine-container">
      <h1 className="pie-chart-title">Vaccination By age</h1>
      <div>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccineByAge}
            startAngle={0}
            endAngle={360}
            innerRadius="0"
            outerRadius="100%"
            dataKey="count"
            width={500}
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="left"
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccineByGender
