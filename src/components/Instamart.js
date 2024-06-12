import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
  return (
    <div className="border border-black m-2 p-2">
      <h3 className="font-bold text-xl">{title}</h3>
      { isVisible ?
        <button 
          className="bg-purple-800 m-1 p-1 rounded-lg text-white"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button> :
        <button 
          className="bg-purple-800 m-1 p-1 rounded-lg text-white"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      }
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return <div className="bg-purple-200 p-2 m-2">
    <h1 className="p-2 m-2 font-bold text-3xl">Instamart</h1>
    <Section 
      title={"About Instamart"} 
      isVisible={visibleSection === 'about'}
      setIsVisible={() => {
        if (visibleSection === 'about')  setVisibleSection('')
        else  setVisibleSection('about')
      }}
      description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
    />
    <Section 
      title={"Team Instamart"} 
      isVisible={visibleSection === 'team'}
      setIsVisible={() => {
        if (visibleSection === 'team')  setVisibleSection('')
        else  setVisibleSection('team')
      }}
      description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
    />
    <Section 
      title={"Careers"} 
      isVisible={visibleSection === 'careers'}
      setIsVisible={() => {
        if (visibleSection === 'careers')  setVisibleSection('')
        else  setVisibleSection('careers')
      }}
      description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
    />
  </div>
}

export default Instamart;