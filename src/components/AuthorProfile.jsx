import Author from "./Author"
import PrimaryButton from "./PrimaryButton"

export default function AuthorProfile(){
	return (
      <div className="author-profile">
      	<Author name="Alvin"  
        imageUrl="https://avatars.githubusercontent.com/u/43749581?v=4" />
        <PrimaryButton />
      </div>
    )
}