import './profile.css';
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; 

    return (
    <>
    <Topbar />
    <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className='profileCoverImg' src={`${PF}posts/4.jpeg`} alt="" />
                    <img className='profileUserImg' src={`${PF}pictures/6.png`} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Rohan Farzana</h4>
                    <span className="profileInfoDesc">Hello friends !!!</span>
                </div>
            </div>  
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile />
            </div>  
        </div>
    </div>
  </>    

  )
}

export default Profile
