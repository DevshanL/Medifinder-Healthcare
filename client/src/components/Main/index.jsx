import styles from "./styles.module.css";
import React, { Component } from 'react';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	
		const myStyle={
			backgroundImage: 
	 "url('https://miro.medium.com/max/1200/1*K9epZSTeca6HXSDrWiGmQA.png')",
			height:'100vh', 
			fontSize:'50px',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		};

	return (
		
    
      

	<div className="home">

       <div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Medifinder</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		
		</div>

		<div style={myStyle}>

<br/>
		<div class="row">
          <div class="col-sm-6">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../cus.jpg "
                width="200"
                height="275"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
               <div class="shadow bg-white rounded">
              <div class="card-body">
                <h5 class="card-title">Customer Management</h5>
              
                <a href="/CusRet" class="btn btn-primary">
                <i class="fas fa-sort-amount-up-alt"></i> 
                </a>
              </div>
            </div>
            </div>
            <br />
            <br />
          </div>

			   <div class="col-sm-6">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../pharmacy.jpg "
                width="200"
                height="275"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="shadow bg-white rounded">
              <div class="card-body">
                <h5 class="card-title"> Pharmacist Management</h5>
               
                <a href="/medret" class="btn btn-primary">
                <i class="fas fa-cubes"></i>
                </a>
              </div>
            </div>
            </div>
            <br />
            <br />
          </div>

       
          
        </div>
		
        
        </div>
		</div>
		
	);
};

export default Main;
