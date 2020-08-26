import React from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

export const TechButton = ({tag, job}) => {
    let tagTo = {
        pathname: `/technology/${tag.name.toLowerCase()}`,
        tag,
        job,
      };
    return (
              <div>
                
                {
                  tag.url === "" 
                    ?
                    <div> 
                      <img src="" alt="tech logo" style={{ width: 50 }} />
                      <h4>{tag.name}</h4> 
                      <Link to={tagTo}>
                        <FontAwesomeIcon
                          className="icons"
                          icon={faAngleDoubleRight}
                          style={{ style: "none" }}
                        />
                        
                      </Link>
                    </div>
                    :
                    <div style={{backgroundColor: "green" }}>
                      <img src="" alt="tech logo" style={{ width: 50 }} />
                      <h4>{tag.name}</h4> 
                      <FontAwesomeIcon
                        className="icons"
                        icon={faAngleDoubleRight}
                        
                      />
                      
                    </div>
                    }
              </div>
    )
}

export default TechButton