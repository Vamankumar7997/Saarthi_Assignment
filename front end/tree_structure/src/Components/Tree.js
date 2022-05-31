import {React, useState} from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Tree.css";

const Tree = ({ data = [] }) => {
    console.log("Tree component data list", data)
    return (
        <div className="tree-container">
            <ul >
                {data.map((tree) => (
                    <TreeNode node={tree} />
                ))}
            </ul>
        </div>
    );
};

const TreeNode = ({ node }) => {
    const [Structure, setStructure] = useState(false);
    const hasStructure = node.items ? true : false;

    return(
        <li className="tree-node border-0 ">
        <div className="d-fle x" onClick={(e) => setStructure((el) => !el)}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        
      
          {hasStructure && (
            <div
              className={`d-inline toggle ${
                Structure ? "active" : ""
              }`}
            >
             
            </div>
          )}
  
          <div className="col ">
            <i className={`${node.icon}`}> </i>
            {node.title}
          </div>
        </div>
  
        {hasStructure && Structure && (
          <div>
            <ul className=" tree-container">
              <Tree data={node.items} />
            </ul>
          </div>
        )}
        
      
        
      </li>
    );
};

export default Tree;