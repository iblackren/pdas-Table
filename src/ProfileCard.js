function ProfileCard({ title, handle, img }) {
  return (
    <div>
      <img alt="profile" src={img} />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
      {/* <div>Handle is {img}</div> */}
    </div>
  );
}

export default ProfileCard;
