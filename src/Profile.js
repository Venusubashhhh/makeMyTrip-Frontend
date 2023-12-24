import React, { useContext, useEffect, useRef, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Emailcontext } from './App';
import axios from 'axios';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
function Profile() {
  const [name, setname] = useState('');
  const [address, setadress] = useState('');
  const [pincode, setpincode] = useState('');

  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const [value, setValue] = React.useState('2022-04-17');
  const [selectedValue, setSelectedValue] = useState(''); // State to hold the selected value
  const [marriage, setmarriage] = React.useState('');
  const [gender, setgender] = React.useState('');
  const [state, setstate] = React.useState('');

  const [formflag, setforamflag] = useState(false)


  const [cleared, setCleared] = useState(false);
const{email,setemail,username}=useContext(Emailcontext)

  const [bday, setbday] = useState(); // State to store selected date
useEffect(()=>{
axios.post('https://backend-mmt.onrender.com/profileView',{email:email}).then((res)=>{console.log(res)
setname(res.data.name);
setpincode(res.data.pincode);
setgender(res.data.gender);
setstate(res.data.state);
setadress(res.data.address);
setmarriage(res.data.matitalStatus);

}).catch((err)=>console.log(err))
},[])

  const handleChange = (event) => {
    setmarriage(event.target.value);
    console.log(image)
  };
  const handlegender = (e) => {
    setgender(e.target.value)
  }
  const handlestate = (e) => {
    setstate(e.target.value)
  }
  function senddetails(e) {
    // e.preventDefault();
    axios.post('https://backend-mmt.onrender.com/profileEdit', { email: email, name: name, gender: gender, matitalStatus: marriage, address: address, pincode: pincode, state: state }).then((res) => { console.log(res) }).catch((err) => console.log(err))
    setforamflag(false)

  }
  // Function to handle change in the select input
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value in state
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="profilSdeBar profilSdeBar--sticky snipcss-J9Ioo" style={{ backgroundColor: 'white', width: '300px', height: '400px', alignContent: 'center', alignItems: 'center', alignSelf: 'center',marginLeft:'30px',marginTop:'-130px',borderRadius:'15px' }}>

        <div onClick={handleClick} style={{ cursor: "pointer", marginLeft: '50px', marginTop: '0px' }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" style={{ borderRadius: '100%', height: '170px',width:'170px',marginLeft:'15px', marginTop: '40px' }} />
          ) : (
            <img src="data:image/png;base64,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" />)}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
        <div className="profilSdeBar__contntWrap" style={{ marginTop: '10px',marginLeft:'' }}>
          <p className="font20 latoBlack blackText" style={{textAlign:'center'}}>{username}</p>
          <p className="font12 darkGreyText appendTop10" style={{textAlign:'center'}}>PERSONAL PROFILE</p>
        </div>
        
        <ul className="sdeBarNav" style={{marginLeft:'75px',marginTop:'20px'}}>
          <li style={{ display: 'flex',marginLeft:'-25px' }}>

          <img style={{height:'25px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrElEQVR4nO2YW4hNURjHfxOaSXFcw4OkJpfkkltu4UVTPPDiNimFmVBKCeNSRIxBHpjGJCkevDM8uJY3HjzMkQfhZWrCwzwYt3Gb0Vf/o43Omb332eespfavVp32Xv/v/Nc6Z63vWwtSUrxjCnAGyALdalk9s3feMgg4C3wH+vK0b8BpYCCeUQXclkkbQAuwEBgCDAUWARcDg2uTxhtaZOwNMLtAv3nAO/VtxhOWy9BnYHqI/jOAL9IsxQPuy0xDBM0hae7imDFAL/BB//ew2Lr4CPwERuOQjZrJmzG0t6Rdj0MOyMSJGNpGaffjkCaZ2BdDa5o+xXBGg0ycjKE9VcTgE2NDIDFFJZf41uHJLmQ7S1gyvuxCxj3NpC3osByW5g4esCyQiS3L9sdMZWL75ZbgCc0axFvVO/lYEKiFzuMRVVrIuWq0FVisdZHR50vAD/W5AVTi4XmgSTV/ofNAo4/ngSCTNZB24L1au/b9SX/0TEn5TQUwDdgJXAeeAh3AJ7UOPbN3O9TXNM6xXaYeeFZg4eZrL1SJjnC14+xVCZEz1AlcA7YBc4DxwGA1+zwXqFOfzoCuG9ijmGVh/l8zbuXAamBAhBjWd42OlLk42X6SYCKsVclgX/gSqEnoUuC5YvYAmygRB1W/5MqAJDNpJXBBsXsjXhCEYquCWymwi9JRH8jk25MKWqP6xmZmM6VnS6DsWFFssExgxzhK+TgeuOkbVkygVgV6VObEUwE8KPYKcpaOfD0q0MrNVOCrPIQ5KP3DFc2AXZm74pw8XI4qHKVjn41+Iu6YoJ3Pcs/IKMLdRVwZJk2bvJinyPeWtbinNs5kPpRoJe5ZJS92jR+aYxI9BqpxRzXwRF6ORBEOB17HqPFL1V7JUyTGqXbvcmi8C7gKjI1qPiUlhf+DXwa9EmTowjmlAAAAAElFTkSuQmCC"></img>
            <p style={{ marginTop: '8px', marginLeft: '5px' }}>Profile</p>
          </li>
          <li style={{ display: 'flex',marginLeft:'-25px' }}>
            <span className="sdeBarNav__iconContnr">
            <img  style={{height:'25px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVR4nO2aTQrCMBBGX3dzgdafW3sQL+BSXYm4qOLPaSrBKt0E0QydpMyDbFMe8yWdpoEXB6AzGiegQgExlHgP0RYRjQmtnisukoZXJIZHKxGPVgyPViKTiZY64iKZIV6R79TABlhRcEUa4NzPG2SKFKmBtp/zBswpUKSxkNAWGcYpSCwYEVESGUrcx5bQEjGX0BAJEhdriVSR2UDiASwxRP4UCZW4ZnCUtJuKyDZV5C1TfLSy2rECvv3mVhlRblHa0lsU08434G38D2vm89Iq9Zu9BvbAmhEQP3zIDPGKZIb4P8Q0JnMaLy4SwSuSiEcrhkcr52h1RkNFpOovf1lJHDUunj0BrAV1jcheauIAAAAASUVORK5CYII="/>
            </span>
            <p style={{ marginTop: '3px', marginLeft: '5px' }}>Login Details</p>
          </li>
          <li
            style={{ display: 'flex',marginLeft:'-28px' }}
          >
            <span className="sdeBarNav__iconContnr">
            <img style={{height:'30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBklEQVR4nO2aW4hVVRjHf+OMjo6j4yVHZ7xUSoZjF9Au4AimpBY9pyEa2UPpgw/2okIvGVgj1oP1UPMUBJYKOtCTYt7TKVK0C+pkoWZeQEjT1GzyxIL/hoWcmbP2PuusvWX2DzbDwPf919r/s9fa61trQ05OTk5OTk6OP5qB5cBXQBdwA/gbOAPsAd4BZgJVvWg0KeZ5oFX/Z54xwEbgNlBwuI4Bi4oY8W0P8b/KvElkkOeAy+roP8DnwCvARKBO1wTgJeBD4Lx1YztkHjLjCHAV+AnYJaOuWvH/AuuBQWSEheqU6dwXutFSDACWApeUZ8xr6SW+SkOhHbijnFPAg6TMDOAW8B+wIkH+aGCnbuh3R/OeAL5Xzm9pmlBnPcprytCpBb6WzuESk2PEYGCvco4CNaTAGmsMl8sQ4Jz0ljjm1GsYmJxVBKYW+BO4C0zzOJdEQ8H1F52lPlyXIcF4QZ3d71k3+kVfjJETDZ9XCchHHsZ+Md6XrllPuLJUOR0E5Bs1at4CPpkj3UMxclqU8zMBOa1GH/as+4i1LnClXjlmHgjGDTVqXoU+qbdWk640KOcaAbmpRn0vR+uka4onVyZbtUIw/lCjpvLzyVjpmgVWnDrE5HQSkB/V6GOedR+X7g8xct5WzscEZL8aNe77ZLZ098XI2a0cU1oH41M1utKz7lvS/cQxvlnV4R0VVsF4XR390rPuFum+5hj/ruK3E5ipavisY/XmQpVVEPW2NxAxHLii+PkEpp+KFp+rwVbpnZN+KTYq/gAp8V7M8VqKdumtc4g1k2+3rmdJiSnWErSxTK3R0jGl7aMlYscBF9S2KZ5SpSNB9dZbdbmtRNwDwHHrVdmflGnRY2heQ08n1HhG+d0Ok9931kJpJBlhnTrVpZk5DiOAX5S/wSE+2hovd8h5pUYzsenYQVVnLgyz9hXMWcDAGAZkjrHWHoFrUdKp+NOa2LifDYiWpXE6WEhQURas/b9qMkghgQFxiIZaNOdkzohChQ0wK8SXgZNWvjkdeiOtw5HQBmTeiEIgAyKqNQy6LL1TOl0KOjQGAm8mNMDHOC5mhDkzfJIK0wCsBi5aDe9LcUKLjDgrXbN7PZcK0AS0aSu6YC1mFsS4iZoiv5ovI4YCmywTXPYXnA8u2u/5DGZXmS5Xyohqq1hzPXbvkenAVn0IUdBf8/9T+KMSRowC/pLWvCQCjcBmq0O39QSYJ6FS+DbiA2l8FjfxIZ22RJsebYE/V/NlxDwr15lB1uGH2YAYT3oUMyLJZY7znFmrpCuOHy6FNOJEQgOcP+YYbk0ci+mDLLPW1pkoMELTIQPMMOiTnJEB5kPlPsmtMmfbEFdFT4MOZOAGvc3oOTk5OTk5OTn0wP+S78uPO61PXAAAAABJRU5ErkJggg==" />
            </span>
            <p style={{ marginTop: '5px', marginLeft: '5px' }}>Save Travellers</p>
          </li>
          <li
            style={{ display: 'flex',marginLeft:'-30px' }}
          >
            <span className="sdeBarNav__iconContnr">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nO3UPyhFYRjH8Q9FqJtiZkEWKcq/xEAZxSIGZbEIkVnZlMGsGBgtFhMLu0wkGUkkJmbp1Eu323XvOfdS1P3WqfO+/Xqe5zzneX6U+E9UYAZHeME7nnGKBdQUE7wJlzjDNFpRiRRGsI87DBUSvBMPmMuji4I/YixJ8GpcYzKmvgtPaM5XyUp4b8N6koqwGlqWlQHco1fhpPCKut8I/skxxr9O6AtZd7AW88nFFhbTL7rxht0fSrCN+czL/jBmBc1yBicYlYWfSFIfulH7nWAQS2lLtpkwwQb24oqrcBXsIQ7DYdEaklTUHsZ3GWU5dFPB/CJvSkwjznGBWXSEXreEr4t+6g16FEE5JnAQnDPam1scBhuP7LzEH+QDIFM8uyGhzT0AAAAASUVORK5CYII="/>
            </span>
            <p style={{ marginTop: '5px', marginLeft: '5px' }}> Logout</p>
          </li>
        </ul>
      </div>

      <div
        className="profilCompont cm__myTripSideBar cm__myProfileTheme snipcss0-0-0-1 snipcss-6x1pQ"
        id="profilePageComponent0"
        style={{ width: '900px',marginLeft:'70px', }}>
          {formflag &&
        <div className="profilEdtFomCrd snipcss-tVrEm" style={{position:"absolute",zIndex:'999999'}}>
          <h3 className="font26 latoBlack blackText">Edit Profile</h3>
          <form data-cy="profileEditFormCard_O2">
            <div className="profilEdtFomCrd__formContanr">
              <div className="travlrFomCrd__formTab">
                <div className="profilEdtFomCrd__fieldRow">
                  <div className="profilEdtFomCrd__fieldColumn">
                    <div className="txtFild">
                      <label
                        htmlFor="profileFirstName"
                        className="font14 latoBold blackText txtFild__label"
                      >
                        Full Name
                        <span className="redText txtFild__lablAstrk">*</span>
                      </label>
                      <div className="txtFild__textInputContanr">
                        <input
                          data-cy="textField_416"
                          className="font14 blackText cap txtFild__textInput"
                          type="text"
                          id="profileFirstName"

                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          style={{ height: '53px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="profilEdtFomCrd__fieldColumn" style={{marginLeft:'40px'}}>
                    <div className="txtFild">
                      <label
                        htmlFor="profileFirstName"
                        className="font14 latoBold blackText txtFild__label"
                      >
                        Date of Birth
                        <span className="redText txtFild__lablAstrk">*</span>
                      </label>
                      <div className="txtFild__textInputContanr">
                        <input
                          data-cy="textField_416"
                          className="font14 blackText cap txtFild__textInput"
                          type="text"
                          id="profileFirstName"

                          value={bday}
                          onChange={(e) => setbday(e.target.value)}
                          style={{ height: '53px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profilEdtFomCrd__fieldRow">
                  <div className="profilEdtFomCrd__fieldColumn">
                    <div className="dropDown">
                      <div className="font14 latoBold blackText dropDown__label">
                        Gender
                      </div>
                      <div style={{ marginLeft: '-10px' }}>
                        <FormControl sx={{ m: 1, minWidth: 190 }}>

                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={gender}

                            onChange={handlegender}
                          >

                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>

                          </Select>

                        </FormControl>
                      </div>
                    </div>
                  </div>
                  <div className="profilEdtFomCrd__fieldColumn" style={{marginLeft:'40px',marginTop:'7px'}}>
                    <div className="dropDown">
                      <div className="font14 latoBold blackText dropDown__label">
                        Marital Status
                      </div>

                      <FormControl sx={{ minHeight: -10, minWidth: 190 }}>

                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={marriage}

                          onChange={handleChange}
                        >

                          <MenuItem value={"Married"}>Married</MenuItem>
                          <MenuItem value={"Single"}>Single</MenuItem>

                        </Select>

                      </FormControl>

                    </div>
                  </div>
                </div>
                <div className="profilEdtFomCrd__fieldRow">
                  <div className="profilEdtFomCrd__fieldColumn">
                    <div className="txtFild">
                      <label
                        htmlFor="profileAddress"
                        className="font14 latoBold blackText txtFild__label"
                      >
                        Your Address
                      </label>
                      <div className="txtFild__textInputContanr">
                        <input
                          data-cy="textField_416"
                          className="font14 blackText cap txtFild__textInput"
                          type="text"
                          id="profileAddress"
                          value={address}
                          onChange={(e) => setadress(e.target.value)}
                          style={{ height: '53px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="profilEdtFomCrd__fieldColumn" style={{marginLeft:'40px'}}>
                    <div className="txtFild">
                      <label
                        htmlFor="profilePincode"
                        className="font14 latoBold blackText txtFild__label"
                      >
                        Pincode
                      </label>
                      <div className="txtFild__textInputContanr">
                        <input
                          data-cy="textField_416"
                          className="font14 blackText cap txtFild__textInput"
                          type="text"
                          id="profilePincode"
                          value={pincode}
                          onChange={(e) => setpincode(e.target.value)}
                          style={{ height: '53px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profilEdtFomCrd__fieldRow">
                  <div className="profilEdtFomCrd__fieldColumn">
                    <div className="dropDown">
                      <div className="font14 latoBold blackText dropDown__label">
                        State
                      </div>

                      <FormControl sx={{ minHeight: -10, minWidth: 190 }}>

                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={state}

                          onChange={handlestate}
                        >

                          <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                          <MenuItem value={"Arunachal Pradesh"}>Arunachal Pradesh</MenuItem>
                          <MenuItem value={"Assam"}>Assam</MenuItem>
                          <MenuItem value={"Bihar"}>Bihar</MenuItem>
                          <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                          <MenuItem value={"Goa"}>Goa</MenuItem>
                          <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                          <MenuItem value={"Haryana"}>Haryana</MenuItem>
                          <MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
                          <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
                          <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
                          <MenuItem value={"Kerala"}>Kerala</MenuItem>
                          <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
                          <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                          <MenuItem value={"Manipur"}>Manipur</MenuItem>
                          <MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
                          <MenuItem value={"Mizoram"}>Mizoram</MenuItem>
                          <MenuItem value={"Nagaland"}>Nagaland</MenuItem>
                          <MenuItem value={"Odisha"}>Odisha</MenuItem>
                          <MenuItem value={"Punjab"}>Punjab</MenuItem>
                          <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                          <MenuItem value={"Sikkim"}>Sikkim</MenuItem>
                          <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
                          <MenuItem value={"Telangana"}>Telangana</MenuItem>
                          <MenuItem value={"Tripura"}>Tripura</MenuItem>
                          <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
                          <MenuItem value={"Uttarakhand"}>Uttarakhand</MenuItem>
                          <MenuItem value={"West Bengal"}>West Bengal</MenuItem>

                        </Select>

                      </FormControl>
                      <div className="dropDown__elmntContanr">
                        <div
                          data-cy="dropdown_399"
                          className="font14 blackText dropDown__valueBox"
                        >
                          <span className="greyText"></span>
                        </div>
                        <ul></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <div className="profilEdtFomCrd__footer" style={{marginLeft:'100px'}}>
              <span
                data-cy="profileEditFormCard_412"
                className="font16 darkGreyText latoBold pushRight appendRight30 cursorPointer"
              >
                Cancel
              </span>
              <div
                data-cy="button_397"
                type="submit"
                className="font16 latoBlack whiteText btn__primry"
                onClick={senddetails} style={{marginLeft:'80px'}}
              >
                save
              </div>
            </div>
          </form>

        </div>
      }
        <div className="detalCrdHadr snipcss0-1-1-2">
          <div className="appendRight10 snipcss0-2-2-3">
            <h3 className="font30 latoBold blackText snipcss0-3-3-4">Profile</h3>
            <p className="font18 darkGreyText appendTop10 snipcss0-3-3-5">
              Basic info, for a faster booking experience
            </p>
          </div>
          <div className="snipcss0-2-2-6">
            <button
              data-cy="button_396"
              type="button"
              className="font16 latoBold blueText btn__dtailAdEdt snipcss0-3-6-7"
              onClick={() => setforamflag(true)}
            >
              <span className="noShrink appendRight5 myPrfilSprit myPrfilSprit__edtIcn snipcss0-4-7-8"></span>
              Edit
            </button>
          </div>
        </div>
        <ul className="profilCompont__dtalLst snipcss0-1-1-9">
          <li className="profilCompont__dtalLstItm snipcss0-2-9-10">
            <div className="profilCompont__dtalLstItmContnt snipcss0-3-10-11">
              <span className="font11 darkGreyText profilCompont__detalkey snipcss0-4-11-12">
                NAME
              </span>
              {name ?
                <span className="font16 blackText latoBold appendRight5 snipcss0-4-11-13">
                  {name}
                </span> : <span
                  data-cy="profileComponent_410"
                  className="font14 latoBold blueText appendRight30 cursorPointer snipcss0-4-15-18"
                >
                  + Add
                </span>
              }
            </div>
          </li>
          <li className="profilCompont__dtalLstItm snipcss0-2-9-14">
            <div className="profilCompont__dtalLstItmContnt snipcss0-3-14-15">
              <span className="font11 darkGreyText profilCompont__detalkey snipcss0-4-15-16">
                BIRTHDAY
              </span>
              <span className="font16 blackText latoBold appendRight5 snipcss0-4-15-17"></span>
              {bday ? <span className="font16 blackText latoBold appendRight5 snipcss0-4-11-13">
                {bday}
              </span> : <span
                data-cy="profileComponent_410"
                className="font14 latoBold blueText appendRight30 cursorPointer snipcss0-4-15-18"
              >
                + Add
              </span>}
            </div>
          </li>
          <li className="profilCompont__dtalLstItm snipcss0-2-9-19">
            <div className="profilCompont__dtalLstItmContnt snipcss0-3-19-20">
              <span className="font11 darkGreyText profilCompont__detalkey snipcss0-4-20-21">
                GENDER
              </span>
              <span className="font16 blackText latoBold appendRight5 snipcss0-4-20-22"></span>
              {gender ? <span className="font16 blackText latoBold appendRight5 snipcss0-4-11-13">
                {gender}
              </span> :
                <span
                  data-cy="profileComponent_410"
                  className="font14 latoBold blueText appendRight30 cursorPointer snipcss0-4-20-23"
                >
                  + Add
                </span>
              }
            </div>
          </li>
          <li className="profilCompont__dtalLstItm snipcss0-2-9-24">
            <div className="profilCompont__dtalLstItmContnt snipcss0-3-24-25">
              <span className="font11 darkGreyText profilCompont__detalkey snipcss0-4-25-26">
                MARITAL STATUS
              </span>
              <span className="font16 blackText latoBold appendRight5 snipcss0-4-25-27"></span>
              {marriage ? <span className="font16 blackText latoBold appendRight5 snipcss0-4-11-13">
                {marriage}
              </span> : <span
                data-cy="profileComponent_410"
                className="font14 latoBold blueText appendRight30 cursorPointer snipcss0-4-25-28"
              >
                + Add
              </span>}
            </div>
          </li>
          <li className="profilCompont__dtalLstItm snipcss0-2-9-29">
            <div className="profilCompont__dtalLstItmContnt snipcss0-3-29-30">
              <span className="font11 darkGreyText profilCompont__detalkey snipcss0-4-30-31">
                YOUR ADDRESS
              </span>
              <span className="font16 blackText latoBold appendRight5 snipcss0-4-30-32"></span>
              {address ? <span className="font16 blackText latoBold appendRight5 snipcss0-4-11-13">
                {address}
              </span> : <span
                data-cy="profileComponent_410"
                className="font14 latoBold blueText appendRight30 cursorPointer snipcss0-4-30-33"
              >
                + Add
              </span>}
            </div>
          </li>
          <li className="profilCompont__dtalLstItm snipcss0-2-9-34">
            <div className="profilCompont__dtalLstItmContnt snipcss0-3-34-35">
              <span className="font11 darkGreyText profilCompont__detalkey snipcss0-4-35-36">
                PINCODE
              </span>
              <span className="font16 blackText latoBold appendRight5 snipcss0-4-35-37"></span>
              {pincode ? <span className="font16 blackText latoBold appendRight5 snipcss0-4-11-13">
                {pincode}
              </span> : <span
                data-cy="profileComponent_410"
                className="font14 latoBold blueText appendRight30 cursorPointer snipcss0-4-35-38"
              >
                + Add
              </span>}
            </div>
          </li>
          <li className="profilCompont__dtalLstItm snipcss0-2-9-39">
            <div className="profilCompont__dtalLstItmContnt snipcss0-3-39-40">
              <span className="font11 darkGreyText profilCompont__detalkey snipcss0-4-40-41">
                STATE
              </span>
              <span className="font16 blackText latoBold appendRight5 snipcss0-4-40-42"></span>
              {state ? <span className="font16 blackText latoBold appendRight5 snipcss0-4-11-13">
                {state}
              </span> :
                <span
                  data-cy="profileComponent_410"
                  className="font14 latoBold blueText appendRight30 cursorPointer snipcss0-4-40-43"
                >
                  + Add
                </span>}
            </div>
          </li>
        </ul>
        
      </div>

      

    </div>
  );
}

export default Profile



