const MoviePage = () => {
	const movies = useSelector((state) => state.movies);
	return (
		<div className="text-[#f9f9f9] min-h-[calc(100vh-17rem)] pl-10">
			<div className="h-[500px] flex justify-between">
				<div className="flex flex-col w-1/4 pt-10">
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
				</div>

				<img
					src={movies?.Poster}
					alt=""
					className="w-[1000px]  object-cover overflow-hidden"
				/>
			</div>

			<p className="text-2xl mt-5">{movies?.Plot}</p>
		</div>
	);
};

export default MoviePage;
