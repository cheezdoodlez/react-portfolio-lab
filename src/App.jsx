
const App = () => {
  
  const pageLay = {
  display:'flex',
  flexDirection: 'column',
  
  }


  const boxStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    color: 'white',
    fontSize: '12pt',
    color: 'black',
    width: '250px',
  };

  const techSkills = [
    {
    name: 'Javascript',
    comfort: 4
  },
  {
    name: 'CSS',
    comfort: 4
  },
  {
    name: 'Html',
    comfort: 4
  },
  {
    name: 'React',
    comfort: 2
  }
  ]

  const myProjects = [
    {
      title: 'cookie clicker' ,
      function: 'click the cookie', 
      link: "https://github.com/cheezdoodlez/unit-one-project.git"
    },
    {
      title: 'Choose your own adventure',
      function:'Adventure game with various outcomes' , 
      link: "https://github.com/cheezdoodlez/Choose-your-own-adventure.git"
    },

    {
      title: 'Men stack crud app',
      function:'To adopt and put cats up for adoption' ,
      link: "https://github.com/cheezdoodlez/men-stack-crud-lab.git"
    }
  ]
  return (
  <div style={pageLay}>
    <h1>Tech skills</h1>
    <ul style = {boxStyle}>
      {techSkills.map((techSkill, index)=>
      <>
      <li key ={index}>{techSkill.name}</li>
      <li key ={index}>{`Comfort level = ${techSkill.comfort}`}</li>
      </>
      )}
    </ul>
    <h1>Projects</h1>
    <ul style={boxStyle}>
      {myProjects.map((myProject, index)=>
      <>
      <li key ={index}>{myProject.title}</li>
      <a href={myProject.link}>link</a>
      </>
      )}
    </ul>
  </div>
  );
};
export default App;


/*/ spent too much time 
trying to understand and style, 
moving on to other labs /*/
  
