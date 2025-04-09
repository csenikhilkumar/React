export function HomeComponents({name,subtitle,time,description}){

    return(
        <div>
        <div style={{height:180,display:"flex", background:"white",padding:20,borderRadius:"20px", margin:"10px"}}>
          <div style={{height:40}}>
            <img
              src="https://avatars.githubusercontent.com/u/172130720?s=400&u=172956d0a1fe05b2ccc5fae11dcfae15975a263a&v=4"
              alt=""
              style={{ height: 40, borderRadius: 40,padding:10 }}
            />
          </div>
          <div>
            <b>{name}</b>
            <div>{subtitle}</div>
           {time && <div style={{display:"flex", gap:4}}>
            <div>{time}</div> <img src="https://thumbs.dreamstime.com/b/black-round-wall-clock-isolated-white-vector-illustration-166769728.jpg" alt="" style={{height:20,alignItems:"center",justifyContent:"center"}}
             />
             </div>}
            <div style={{marginTop:20}}>
              {description}
            </div>
          </div>
        </div>
      </div>
    )
}