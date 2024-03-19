import React, { useState,useRef,useEffect } from "react";

function WebsiteSetup(props) {

    const[addNewItem,setAddNewItem] = useState(false);
    let item1ref = useRef(null);
    let item2ref = useRef(null);
    const[showList,setShowList] = useState(0);
   
    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (item1ref.current && !item1ref.current.contains(e.target)) {
            setAddNewItem(false);
          }
          if (item2ref.current && !item2ref.current.contains(e.target)) {
            setShowList(0);
          }
        };
      
        document.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    let motherTongueArr = ["Assamese", "Bengali", "Bodo", "Dogri", "Gujarati", "Hindi", "Kannada", "Kashmiri", "Maithili", "Malayalam", "Manipuri", "Marathi", "Nepali", "Odia", "Punjabi", "Sanskrit", "Santali", "Sindhi", "Tamil", "Telugu", "Urdu"];
    let religionArr = ["Hindu", "Muslim", "Sikh", "Christian", "Buddhist", "Jain", "Parsi", "Jewish", "Bahai"];
    let maritalStatusArr = ["Never Married", "Awaiting Divorce", "Divorced", "Widowed"];
    let empolyeArr = ["Private Sector", "Government/Public Sector", "Civil Services", "Not Working"];
    let occupationsArr = ["Engineer", "Architect", "Scientist", "Teacher", "Technician", "Civil engineer", "Electrical engineer", "Psychologist"];
    let incomeArr = ["No Income", "Rs. 1 - 2 Lakh", "Rs. 2 - 3 Lakh", "Rs. 3 - 4 Lakh", "Rs. 4 - 5 Lakh"];
    let yearsOfExpris = ["0 - 1 year", "1 - 3 years", "3 - 5 years", "5 - 7 years", "7 - 10 years"];
    let highDegrees = ["BBA", "BMS", "BFA", "BEM", "B.Sc", "BA", "B.Tech", "BCA", "BPT", "CA", "CS"];
    let fatherOccups = ["Business/Entrepreneur", "Service-Private", "Army/Armed Forces", "Civil Services", "Retired"];
    let motherOccups = ["Housewife", "Service-Private", "Teacher", "Civil Services", "Retired"];
    let countries = ["Russia", "Canada", "China", "US of America", "Brazil", "Australia", "India", "Argentina", "Kazakhstan", "Algeria"];
    let skills = ["Problem solving", "Communication", "Interpersonal", "Time management"];
    let boardsAr = ["CBSE", "ICSE","IB","NIOS" ,"AISSCE","JAC Ranchi"];
    
    
    const{websiteList}=props;

      console.log(showList);


    return(
        <div className="members-section">
            <h5 className="m-0 py-4">
                {websiteList===1?"Website Header":websiteList===2?"Website Footer":websiteList===3?"Website Pages":websiteList===4?
                "General":""}
            </h5>
            <div >
                
                {websiteList===1&&
                <div className="bg-white w-75 m-auto py-3">
                    <div className="d-flex px-4 fw-bold">
                        <div>Header Settings</div>
                    </div>
                    <div className=" m-2 px-3 mt-5">
                        <div className="row my-2">
                            <div className="col-3">Header Logo</div>
                            <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                            <div className="col-5"><img className="imageFit" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Meta Image</div>
                            <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                            <div className="col-5"><img className="imageFit" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Match Image</div>
                            <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                            <div className="col-5"><img className="imageFit" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Video Calling Image</div>
                            <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                            <div className="col-5"><img className="imageFit" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Video Profile Image</div>
                            <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                            <div className="col-5"><img className="imageFit" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Exclusive Image</div>
                            <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                            <div className="col-5"><img className="imageFit" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Mobile App Image</div>
                            <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                            <div className="col-5"><img className="imageFit" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
                        </div>
                    </div>
                    <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                </div>
                }
                {websiteList===2&&
                <div>
                    <div className="bg-white w-75 m-auto py-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Footer Settings</div>
                        </div>
                        <div className="row m-2 px-1 mt-5">
                            <div className="row my-3">
                                <div className="col-3">Footer Logo</div>
                                <div className="col-4"><input className="appereInput w-100" type="file" /></div>
                                <div className="col-5"><img className="imageFit" src="https://goclean.com.tw/wp-content/uploads/2022/02/Footer-logo-full_123.png"/></div>
                            </div>

                            <div className="text-end"><button className="updateBtn">Update</button></div>
                        </div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 mt-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Contact widget</div>
                        </div>
                        <div className="setupInut">
                            <label>Address</label>
                            <input type="text" />
                        </div>
                        <div className="setupInut">
                            <label>Website</label>
                            <input type="text" />
                        </div>
                        <div className="setupInut">
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div className="setupInut">
                            <label>Phone</label>
                            <input type="number" />
                        </div>
                        <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 mt-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Footer Copyright</div>
                        </div>
                        <div className="setupInut">
                            <label>Copyright Text</label>
                            <textarea rows="3" cols="76"></textarea>
                        </div>
                        <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 mt-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Social Link widget</div>
                        </div>
                        <div >
                            <div className="setupInut">
                                <label>Social Link</label>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-facebook-f"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-twitter"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-square-instagram"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-youtube"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-linkedin"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                        </div>
                        <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                    </div>
                </div>
                }
                {websiteList===3&&
                <div className="bg-white m-auto py-3 mt-3">
                    <div className="d-flex px-4 fw-bold justify-content-between">
                        <div>All pages</div>
                        <div><button className="btn btn-danger">Add New page</button></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-40">Name</div>
                        <div className="wid-40">URL</div>
                        <div className="wid-22">Actions</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-40">Home Page</div>
                            <div className="wid-40">http://yogjodi.com</div>
                            <div className="wid-22"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        <div className="multipleData">
                            <div className="wid-40">Terms conditions Page</div>
                            <div className="wid-40">http://yogjodi.com/terms-conditions</div>
                            <div className="wid-22"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        <div className="multipleData">
                            <div className="wid-40">Privacy Policy Page</div>
                            <div className="wid-40">http://yogjodi.com/privacy-policy</div>
                            <div className="wid-22"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        
                    </div>
                </div>
                }
                
                {websiteList===4&&
                <div className="bg-white m-auto py-3 mt-3">
                    <div className="d-flex px-4 fw-bold justify-content-between">
                        <div>General</div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Frontend Website Name</div>
                        <div className="col-7"><input className="appereInput w-75" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Site Icon</div>
                        <div className="col-7"><input className="appereInput w-75" type="file" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Website Base Color</div>
                        <div className="col-7"><input className="appereInput w-75" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Member Profile Page Banner</div>
                        <div className="col-7"><input className="appereInput w-75" type="file" /></div>
                    </div>
                    <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                   
                </div>
                }
                {websiteList===5&&
                <div className="bg-white w-75 m-auto py-3 my-3 position-relative">
                    <div className="d-flex px-4 fw-bold justify-content-between">
                        <div>forms</div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Mother tongue</div>
                        <div className="col-9 ">
                            <div onClick={()=>setShowList(1)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===1&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {motherTongueArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Mother Tongue</button>
                        </div>
                        
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Religion</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(2)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===2&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {religionArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Religion</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Caste</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(3)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===3&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {motherTongueArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Caste</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Marital Status</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(4)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===4&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {maritalStatusArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Marital Status</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Height</div>
                        <div className="col-9 d-flex">
                            <div>
                                <div onClick={()=>setShowList(41)}><input type="text" className="appereInput" value="" placeholder="Minimum Height" /></div>
                            </div>
                            <div className="mx-3">
                                <div onClick={()=>setShowList(42)}><input type="text" className="appereInput " value="" placeholder="Maximum Height" /> </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Employed In</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(5)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===5&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {empolyeArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Employed</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Occupation</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(6)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===6&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {occupationsArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Occupation</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Organization</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(7)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===7&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Organization</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Annual Income</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(8)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===8 &&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {incomeArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Income</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Years Of Experience</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(9)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===9&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {yearsOfExpris.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Yrs of Experience</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Highest Degree</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(10)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===10&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {incomeArr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Income</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Father's Occupation</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(11)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===11&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {fatherOccups.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Father's Occupation</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Mother's Occupation</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(12)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===12&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {motherOccups.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Mother's Occupation</button>
                        </div>
                    </div>
                    {/* <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Family type</div>
                        <div className="col-7"></div>
                    </div> */}
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Age</div>
                        <div className="col-9 d-flex">
                            <div>
                                <div onClick={()=>setShowList(41)}><input type="text" className="appereInput" value="" placeholder="Minimum Age" /></div>
                            </div>
                            <div className="mx-3">
                                <div onClick={()=>setShowList(42)}><input type="text" className="appereInput " value="" placeholder="Maximum Age" /> </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Country</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(13)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===13&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {countries.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Country</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">State</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(14)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===14&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {countries.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New State</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Skill</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(15)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===15&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {skills.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Skill</button>
                        </div>
                    </div>
                    <div className="row m-2 px-1 mt-5 position-relative">
                        <div className="col-3">Board</div>
                        <div className="col-9">
                            <div onClick={()=>setShowList(16)}><input type="text" className="appereInput w-75" value="All" /></div>
                            {showList===16&&
                            <div className="dropdownItem">
                                <ul ref={item2ref}>
                                    {boardsAr.map((m1,index)=>(
                                        <li onClick={()=>setShowList(0)} key={index}>{m1} <i class="fa-solid fa-trash deleteBtn"></i></li>
                                    ))}
                                </ul>
                            </div>
                            }
                            <button className="addItem" onClick={()=>setAddNewItem(true)}>Add New Board</button>
                        </div>
                    </div> 
                    
                   
                </div>
                }
                
            </div>
            <div>
            {addNewItem &&
                <div className="popup-box" >
                    <div className="box4" ref={item1ref}>
                        <div className="px-4 py-3">
                            <span className="iconClose" onClick={()=>setAddNewItem(false)}><i class="fa-solid fa-xmark px-1"></i></span>
                            <h5 className="">Add More</h5>
                            <div className="mt-4">
                                <input type="text" className="appereInput w-100"/>
                            </div>
                            <div className="">
                                <button className="addBtnq" onClick={()=>setAddNewItem(false)}><i class="fa-solid fa-xmark px-1"></i>Cancel</button>
                                <button className="saveBtnq" onClick={()=>setAddNewItem(false)}><i class="fa-regular fa-bookmark px-1"></i>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                 }
            </div>
        </div>
    )


}
export default WebsiteSetup;

// https://github.com/GnoinInd/yog-jodi-admin.git