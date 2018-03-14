import React from 'react' ;

const Ranks = ({name, enteries}) => {
    return(
       <div>
       		<div className='red f3'>
	        	{`${name} , your current entry count is...`}
	    	</div>
	        <div className='red f1 '>
	        	{enteries}
	        </div>
       </div>
    )
}

export default Ranks;