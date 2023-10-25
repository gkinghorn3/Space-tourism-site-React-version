import { bool, func } from 'prop-types';


import './Burger.styles.scss';

const Burger = ({open, setOpen}) => {
    return (
      <div className='burger-icon' open={open} onClick={() => setOpen(!open)}>
        <div className={` ${open === true ? 'first-child-rotate' : ''}`} />
        <div  className={` ${open === true ? 'second-child-translate' : ''}`}/>
        <div className={` ${open === true ? 'third-child-rotate' : ''}`}/>
      </div>
    )
  }

  Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
  
  export default Burger;