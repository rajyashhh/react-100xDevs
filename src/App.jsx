function App() {
  

  return (
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <PostComponent/>
      </div>
      

      </div>
  )
    
}
const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth : 1, padding: 20};
function PostComponent(){
  return <div style={style}>
    <div style={{display:"flex"}}>
    <img src={"data:image/png;base64,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"} style={{
      width: 20,
      height:20,
      borderRadius: 20  
    }}/>
    <div style={{fontSize: 10, marginLeft : 10, marginRight : 10}}>
      <b>
        X
      </b>
      <div>69 followers</div>
      <div>10m</div>

    </div>
    
  </div>
  <div style={{fontSize: 12}}>
      Why X is growing so fast? 
    </div>
  </div>
}
export default App
