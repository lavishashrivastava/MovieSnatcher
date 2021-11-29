import HeaderItems from "./HeaderItems";
import { HomeIcon,
        BadgeCheckIcon,
        CollectionIcon,
        LightBulbIcon,
        SearchIcon,
        UserIcon
} from '@heroicons/react/outline'
import Image from 'next/image'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between
        items-center h-auto">
            <Image
               className="object-contain"
               src="/Movie.png"
               width={200}
               height={60}
            />
            <div className="flex flex-grow justify-evenly max-w-2xl mt-3">
            <HeaderItems title="HOME" Icon={HomeIcon}/>
            <HeaderItems title="TRENDING" Icon={LightBulbIcon}/>
            <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}/>
            <HeaderItems title="COLLECTION" Icon={CollectionIcon}/>
            <HeaderItems title="SEARCH" Icon={SearchIcon}/>
            <HeaderItems title="ACCOUNT" Icon={UserIcon}/>
            </div>
        </header>
        
    )
}

export default Header
