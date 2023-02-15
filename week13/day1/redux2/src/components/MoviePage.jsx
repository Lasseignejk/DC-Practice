import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircle,
	faPlus,
	faUserGroup,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";

const MoviePage = () => {
	const movies = useSelector((state) => state.movies[0]);
	return (
		<div className="text-[#f9f9f9] min-h-[calc(100vh-17rem)] pl-10 bg-[#151722]">
			<div className="flex relative h-[600px] justify-end">
				<div className="h-[600px] overflow-hidden">
					<img
						src={movies?.Poster}
						alt=""
						className="w-[1300px] h-[800px] overflow-hidden object-cover"
					/>
				</div>
				<div className="absolute top-0 w-full h-full movieGradient">
					<div className="flex flex-col relative">
						<div className="pb-10">
							<div className="flex flex-col w-[40%] pt-10 h-full">
								<h1 className="text-5xl">{movies?.Title}</h1>
								<div className="flex gap-5 mt-16 text-sm items-center">
									<p>{movies?.Rated}</p>
									<span className="flex items-center gap-[4px]">
										{movies?.Year}
										<span className="pb-2">
											<FontAwesomeIcon icon={faCircle} className="text-[5px]" />
										</span>
										{movies?.Runtime}
									</span>
								</div>
								<p className="text-sm">{movies?.Genre}</p>
								<div className="flex gap-5 items-center mt-7">
									<button className="border-2 rounded-md font-bold px-6 py-3 flex items-center text-[#050609] bg-[#f9f9f9]">
										<FontAwesomeIcon
											icon={faPlay}
											className="text-lg text-[#050609] mr-4"
										/>{" "}
										PLAY
									</button>
									<button className="border-2 bg-[#050609] rounded-md font-bold px-5 py-3">
										TRAILER
									</button>
									<button className="rounded-full bg-[#050609] border-2 py-2 px-3">
										<FontAwesomeIcon icon={faPlus} className="text-lg" />
									</button>
									<button className="rounded-full bg-[#050609] border-2 p-2">
										<FontAwesomeIcon icon={faUserGroup} className="text-xl" />
									</button>
								</div>
								<p className="text-2xl pt-5">{movies?.Plot}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p>Suggested, extras, etc.</p>
			</div>
		</div>
	);
};

export default MoviePage;
