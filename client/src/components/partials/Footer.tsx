import React from 'react'
import '../../App.css'

export default function Footer() {
	return (
		<footer styleName="page-footer" style={{ minHeight: '10.1vh' }}>
			<div className="container">
				<div className="row" style={{ marginBottom: '0px!important' }}>
					<div className="center-align">
						<span className="white-text" styleName="footer-sbm">
							SB Meek Company
						</span>
						<p styleName="footer-text">
							&copy; All rights reserved ({new Date().getFullYear()})
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}