import { InformationCircleIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { FaPlay } from "react-icons/fa";
import { modalState, movieState } from "../atoms/modelAtom";
import ReactPlayer from "react-player/lazy";
import { useRecoilState } from "recoil";
import { Element, Genre, Movie } from "../typings/typings";
import Image from "next/image";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [isScrolled, setIsScrolled] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  useEffect(() => {
    if (!movie) return;
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex h-full flex-col space-y-2 py-16 md:space-y-4 justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
        {/*
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          muted = {isScrolled}
          playing
          loop={true}
        />*/}
      </div>
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-x lg:max-w-xl lg:text-xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  );
}

export default Banner;
