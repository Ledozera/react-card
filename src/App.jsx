import Profile from "./components/profile"
import "./app.css"

export default function App(){
  return(
    <div className="app">
      <Profile
        avatar="https://media.licdn.com/dms/image/D4D03AQEI-3w4f7cZUw/profile-displayphoto-shrink_200_200/0/1705605251945?e=2147483647&v=beta&t=teB_vI1NMOb0s10a-g1bifQ_wQClhJEB1jlWi6rJ7Cw"
        name="Eduardo Ledo"
        bio="Full-stack Developer at ADN"
        email="eduardoledo11@gmail.com"
        phone="+55 (41) 9 8890-8464"
        instaUrl="https://instagram.com/edu.ledo02"
        linkedinUrl="https://www.linkedin.com/in/eduardo-ledo-de-souza-a0b65a23a/"
        twitterUrl="https://x.com/ledozera"
      />
      <Profile
        avatar="https://media.licdn.com/dms/image/D5603AQEGeOaf6lRR9Q/profile-displayphoto-shrink_200_200/0/1695047145610?e=1715212800&v=beta&t=VUfr_-y0KVxvpSQzP-FYPJsDoFTI_WVcdN3e9PAaiaU"
        name="Ana Paula Santos"
        bio="Civil Engineer"
        email="anapteixeiras@hotmail.com"
        phone="+55 (41) 9 8768-0879"
        instaUrl="https://instagram.com/anapteixeira_s"
        linkedinUrl="https://www.linkedin.com/in/ana-paula-teixeira-dos-santos-967a631b3/"
        twitterUrl="https://x.com/anaabublebubule"
      />
    </div>
  )
}