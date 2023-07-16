import React from 'react'
import "./Al.scss"
const Test = () => {
    const info="The href attribute is required for an anchor to be keyboard accessible. Provide a valinavigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn mor";
    const description =`${info.substring(0,50)}...`
   
    return (
        
        <div className='al'>
            <div className='menu'>
                <div className='menu-btn'>
                    <img src='Fine_Logo2.svg' alt='fine logo'></img>
                  
                </div>
                <div className='menu-options'>
                    <div>
                        <a className='bg'>Loan Options</a>
                        {/* <a className='sm'>See all the Loan Providers we have for you</a> */}
                    </div>
                    <div>
                        <a className='bg'>Find A Funder</a>
                        {/* <a className='sm'>See all the Loan Providers we have for you</a> */}
                    </div>
                    <div>
                        <a className='bg'>Provide Loan's</a>
                        {/* <a className='sm'>See all the Loan Providers we have for you</a> */}
                    </div>
                    <div>
                        <a className='bg'>Get Funded</a>
                        {/* <a className='sm'>See all the Loan Providers we have for you</a> */}
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className='heading'>Find the Best Loan-Provider for you</div>
                <div className='loan'>
                    <div className="divide">
                    <div className='name'>Manas Patidar <a>Authorized</a></div>
                    <div className='amount'>Rs 500000 at 9%(yearly) for 9Years </div>
                    <div className='amount'>You get Rs 500000 and Payback Rs100000</div>
                    <div className='discription'>{description}</div>
                    </div>
                    <div className='btn'>
                        <button>+</button>
                    </div>
                    
                </div>
                <div className='loan'>
                    <div className='divide'>
                    <div className='name'>Manas Patidar <a>Authorized</a></div>
                    <div className='amount'>Rs 500000 at 9%(yearly) for 9Years </div>
                    <div className='amount'>You get Rs 500000 and Payback Rs100000</div>
                    <div className='discription'>{description}</div>
                    </div>
                    <div className='btn'>
                        <button>+</button>
                    </div>
                </div>
                <div className='loan'>
                    <div className='divide'>
                        <div className='name'>Manas Patidar <a>Authorized</a></div>
                        <div className='amount'>Rs 500000 at 9%(yearly) for 9Years </div>
                        <div className='amount'>You get Rs 500000 and Payback Rs100000</div>
                        <div className='discription'>{description}</div>
                     </div>
                     <div className='btn'>
                        <button>+</button>
                    </div>
                </div>
                <div className='loan'>
                    <div className='divide'> 
                        <div className='name'>Manas Patidar <a>Authorized</a></div>
                        <div className='amount'>Rs 500000 at 9%(yearly) for 9Years </div>
                        <div className='amount'>You get Rs 500000 and Payback Rs100000</div>
                        <div className='discription'>{description}</div>
                    </div>
                    <div className='btn'>
                        <button>+</button>
                    </div>
                </div>
                <div className='loan'>
                    <div calssName='divide'>
                    <div className='name'>Manas Patidar <a>Authorized</a></div>
                    <div className='amount'>Rs 500000 at 9%(yearly) for 9Years </div>
                    <div className='amount'>You get Rs 500000 and Payback Rs100000</div>
                    <div className='discription'>{description}</div>
                    </div>
                     <div className='btn'>
                        <button>+</button>
                    </div>
                </div>
                <div className='loan'>
                    <div classname='divide'>
                    <div className='name'>Manas Patidar <a>Authorized</a></div>
                    <div className='amount'>Rs 500000 at 9%(yearly) for 9Years </div>
                    <div className='amount'>You get Rs 500000 and Payback Rs100000</div>
                    <div className='discription'>{description}</div>
                    </div>
                     <div className='btn'>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div className="leftside">
                <div> <button>+</button></div>
                <div><button>space</button></div>
                <div><button>-</button></div>
            </div>
        </div>
    )
}

export default Test;