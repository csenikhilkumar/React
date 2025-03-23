function ProfileCard() {
  return (
    <div style={{padding:20}}>
      <div
        style={{
          borderRadius: 20,
          background: "white",
          width: 250,
          height: 280,
          border: "1px solid #abb2b9",
          
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 20,
            background: "#a9cce3",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/172130720?s=400&u=172956d0a1fe05b2ccc5fae11dcfae15975a263a&v=4"
            alt="usrImage"
            style={{
              height: 50,
              borderRadius: 50,
              border: "1px solid black",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: 20 }}>
            <div
              style={{ padding: 5, display: "flex", justifyContent: "center" }}
            >
              <b>NIKHIL</b>
            </div>

            <div>working with microshoft</div>
          </div>
        </div>
        <div>
          <div  style={{display:"flex", gap:"99px",padding:8}}>
            <div>ProfileViewer</div>
            <div>10k</div>
          </div>
          <div style={{display:"flex", gap:"90px",padding:8}}>
            <div>PostImpression</div>
            <div>1029</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
