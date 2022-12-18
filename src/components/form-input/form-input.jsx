
import './form-input.css'


const formIn = ({label,...otherInfo})=>{
    return(
        <div className="group">
            <input 
                {...otherInfo}
            />
            {label && 
            <label className={`${otherInfo.value.length ? 'shrink':''} form-input-label`}  >{label}</label>
            }
            
             
        </div>
    );
    
}
export default formIn;