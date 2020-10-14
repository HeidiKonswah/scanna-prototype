import React from 'react';

function Header() {
  return (
    <div className="header">
        <header>
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                        <span>+201146955011</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
                        <span>Mohamednabil@scanna.com</span>
                    </li>
                </ul>


                 
                
                <ul>
                    <li class="clickable">Register | Sign in</li>
                </ul>

        </header>
        <section class="banner">
            <nav>
                <h2>SCANNA</h2>
                <ul>
                    <li class="clickable">Home</li>
                    <li class="clickable">About</li>
                    <li class="clickable">Department</li>
                    <li class="clickable">Contact</li>
                    <li class="actionBtn">Subscribe</li>
                </ul>
            </nav>
            <div class="overlay"></div>
            <div class="intro">
                
                <span id="welcome">Welcome to Scanna</span>
                <p id="mainTitle">We are here for your care</p>
                <p id="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a class="actionBtn">Subscribe Now</a>
            </div>
        </section>
    </div>
  );
}

export default Header;
