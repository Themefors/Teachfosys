"use client"

import FlowingMenu from "@/Components/ui/FlowingMenu/FlowingMenu"

const TeachFosysMenu = () => {

  const teachfosysItems = [
    { 
      link: "/design", 
      text: "Design", 
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*TtLk_JHBi9djjedKctw-7Q.jpeg" 
    },
    { 
      link: "/build", 
      text: "Build", 
      image: "https://www.sciencebuddies.org/7zLYmn_ONTUkBcZrOUKRf7u7RMc=/640x480/-/https/careerdiscovery.sciencebuddies.org/cdn/Files/19713/5/web-developer-designer-main.jpg" 
    },
    { 
      link: "/test", 
      text: "Test", 
      image: "https://testsigma.com/blog/wp-content/uploads/88840864-0554-4709-ae81-de4efaada038.png?format=webp&w=640&q=75" 
    },
    { 
      link: "/deploy", 
      text: "Deploy", 
      image: "https://mattermost.com/wp-content/uploads/2022/08/10_Deploy_React_Kubernetes_Docker@2x-2048x1071.webp" 
    }
  ];

  return (
    <section className="w-full bg-[#18191b] py-20 px-6">
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={teachfosysItems} />
      </div>
    </section>
  )
}

export default TeachFosysMenu;
