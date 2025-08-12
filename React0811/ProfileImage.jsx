const ProfileImage = ({src}) => {
    return <img 
    style ={{width: "35px" , height:"35px", borderRadius:"9999px",ObjectFit:"cover"}}

    src={src} alt="" />;

};

export default ProfileImage;
