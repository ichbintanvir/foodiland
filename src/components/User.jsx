import P4 from '../elements/Description/P4'
import P2 from '../elements/Description/P2'


const User = ({userImg,name,data}) => {
  return (
    <div className='flex items-center gap-[16px]'>
        <img src={userImg} alt={name} className='w-[50px] h-[50px] rounded-full object-fill'/>
        <div>
            <P4>{name}</P4>
            <P2>{data}</P2>
        </div>
    </div>
  )
}

export default User