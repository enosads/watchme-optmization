import {Button} from "./Button";
import {memo} from "react";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export const SideBar = memo(
  ({
     genres,
     selectedGenreId,
     buttonClickCallback
   }: SideBarProps) => {
    return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => buttonClickCallback(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    )
  },
  (
    prevProps,
    nextProps) =>
    (Object.is(prevProps.genres, nextProps.genres) && Object.is(prevProps.selectedGenreId, nextProps.selectedGenreId))
)