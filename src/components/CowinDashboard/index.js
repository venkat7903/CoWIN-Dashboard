// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccineByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'PROGRESS',
}

const getFormattedData = data => ({
  vaccineDate: data.vaccine_date,
  dose1: data.dose_1,
  dose2: data.dose_2,
  age: data.age,
  count: data.count,
  gender: data.gender,
})

class CowinDashboard extends Component {
  state = {
    last7DaysVaccination: [],
    vaccineByAge: [],
    vaccinationByGender: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVaccineDetails()
  }

  getVaccineDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({
        last7DaysVaccination: data.last_7_days_vaccination.map(each =>
          getFormattedData(each),
        ),
        vaccineByAge: data.vaccination_by_age.map(each =>
          getFormattedData(each),
        ),
        vaccinationByGender: data.vaccination_by_gender.map(each =>
          getFormattedData(each),
        ),
      })
      this.setState({apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {vaccinationByGender, vaccineByAge, last7DaysVaccination} = this.state
    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccineByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccineByAge={vaccineByAge} />
      </>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-msg">Something went wrong</h1>
    </div>
  )

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-app-container">
        <div className="sub-cowin-app-container">
          <div className="app-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="web-logo"
            />
            <h1 className="app-title">Co-Win</h1>
          </div>
          <h1 className="cowin-in-india-title">CoWIN Vaccination in India</h1>
          <div className="views-container">{this.renderViews()}</div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard
