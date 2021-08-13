import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-dark text-light">
                <footer className="footer text-center ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                        
                            </div>
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Contact</h4>
                                <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Mosaibah/traversy-task-tracker"><i className="bi bi-github"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/ProAbdulrahmna"><i className="bi bi-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="https://t.me/ProAbdulrahman"><i className="bi bi-telegram"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>
        <div className="copyright pb-3 text-center">
            <div className="container"><small>Copyright &copy; Abdulrahman</small></div>
        </div>
            </div>
        )
    }
}
