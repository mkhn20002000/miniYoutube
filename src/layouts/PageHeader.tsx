import logo from '../assets/Logo.png';

const PageHeader = () => {
  return <div className="flex ga-10 lg:gap-20 justify-between">
    <div className="flex gap-4 items-center flex-shrink-0">
        <button></button>
        <a href="/">
            <img src={logo} className='h-6'/>
        </a>
    </div>
    <div></div>
    <div></div>
  </div>
}

export default PageHeader
