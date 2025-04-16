function PostComponents() {
  return (
    <div
      style={{
        width:200,
        backgroundColor: "white",
        borderRadius: 5,
        borderColor: "pink",
        padding:20
      }}
    >
      
      <div style={{ display:"flex" }}>
        <img
          src="https://avatars.githubusercontent.com/u/172130720?s=400&u=172956d0a1fe05b2ccc5fae11dcfae15975a263a&v=4"
          alt="nikhil's photo"
          style={{ height: 20, width: 20, borderRadius: 20 }}
        />
        <div style={{ fontSize: 10, marginLeft: 20 }}>
          <b>Nikhil</b>
          <div>20,304 followers</div>
          <div>12m</div>
        </div>
      </div>
      <div>
        hi i am nikhil i am from rajsthan sikar and curretly i am studding in
        sobhasaria group of institution
      </div>
    </div>
  );
}

export default PostComponents;
