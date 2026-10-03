function App() {
  return (
    <div className="w-full">
    <div className="flex w-full justify-center">
      <div className="w-[22%] shrink-0">
      <div className="first mx-15 h-fit shrink-0 sticky top-0">
        <div className="items flex-col  space-y-4 text-xl">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="hover:cursor-pointer invert w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
          <ul className="space-y-4 relative">
            <li className="flex gap-3 font-bold hover:cursor-pointer"><span className="material-symbols-outlined">
              home
            </span>Home</li>
            <li className="flex gap-3 font-bold hover: cursor-pointer"><span className="material-symbols-outlined">
              search
            </span>Explore</li>
            <li className="flex gap-3 font-bold hover: cursor-pointer"><span className="material-symbols-outlined ">
              notifications
            </span>Notifications</li>
            <li className="flex gap-3 font-bold hover: cursor-pointer"><span className="material-symbols-outlined">
              group_add
            </span>Follow</li>
            <li className="flex  gap-3 font-bold hover: cursor-pointer"><span className="material-symbols-outlined">
              <span className="material-symbols-outlined my-1">
                chat_bubble
              </span>
            </span>Chat</li>
            <li className="flex gap-3 font-bold"><svg viewBox="0 0 33 32" aria-hidden="true" className="hover: cursor-pointer invert w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g></svg>Grok</li>
            <li className="flex gap-3 font-bold hover: cursor-pointer"><span className="material-symbols-outlined">
              person
            </span>Profile</li>
            <li className="flex gap-3 font-bold hover: cursor-pointer"><span className="material-symbols-outlined">
              more
            </span>More</li>
            <li className="bg-gray-200 rounded-full p-3 w-60 text-black font-bold flex justify-center relative right-3 hover: cursor-pointer "><button>Post</button></li>
          </ul>
          <div className="flex">
            <span className="material-symbols-outlined hover: cursor-pointer"
              style={{ fontSize: "50px" }}
            >
              account_circle
            </span>
            <div><h1 className="text-lg font-bold hover: cursor-pointer">Monkey D Luffy</h1><div className="text-sm text-gray-400 hover: cursor-pointer">@MonkeyDLuffy9d</div></div>
            <span className="material-symbols-outlined mx-3 my-3 hover: cursor-pointer">
              more_horiz
            </span>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[48%]">
      <div className="sec flex-1 border-x border-gray-800 min-w-0">
        <div className="itms relative">
          <div className="sticky top-0 backdrop-blur z-10">
            <ul className="flex px-4 py-1  m-1 justify-between text-gray-400 hover: cursor-pointer">
              <li className="font-bold text-white">For you</li>
              <li>Following</li>
              <li>Sports</li>
              <li>Tech</li>
              <li>Health</li>
              <li><span class="material-symbols-outlined">
                add
              </span></li>
            </ul>
            <div className="line w-15 bg-blue-500 h-1 rounded-4xl relative left-4 "></div>
            <div className="w-full border border-gray-800"></div>
          </div>
          <div className="whats flex px-2 py-2 text-xl gap-1">
            <span className="material-symbols-outlined" style={{ fontSize: "50px" }}>
              account_circle
            </span>
            <input type="text" placeholder="What's happening?" className="outline-none" />
          </div>
          <div className="reply flex gap-1 text-blue-400 px-14">
            <span className="material-symbols-outlined my-1" style={{ fontSize: "15px" }}>
              globe_uk
            </span>
            <div className="text-sm font-bold">Everyone can reply</div>
          </div>
          <div className="linee w-130 border border-gray-800 mx-10 my-3"></div>
          <div className="icons px-13 py-2"><ul className="flex gap-4 relative">
            <li><span className="material-symbols-outlined hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">
              image
            </span></li>
            <li><span className="material-symbols-outlined hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">
              gif_box
            </span></li>
            <li><svg viewBox="0 0 33 32" aria-hidden="true" className="hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600 invert w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g></svg></li>
            <li><span className="material-symbols-outlined hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">
              event_list
            </span></li>
            <li><span className="material-symbols-outlined hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">
              mood
            </span></li>
            <li><span className="material-symbols-outlined hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">
              calendar_clock
            </span></li>
            <li><span className="material-symbols-outlined hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">
              location_on
            </span></li>
            <li><span className="material-symbols-outlined hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">
              flag_2
            </span></li>
            <li><button className="bg-gray-600 rounded-full w-18 h-9 relative left-30 font-bold text-black bottom-2 hover:cursor-pointer hover:rounded-4xl hover:bg-gray-600">Post</button></li>
          </ul>
          </div>

          <div className="line2 w-full border border-gray-800"></div>
          <div className="flex justify-center m-3"><div className="post text-blue-400 hover: cursor-pointer">Show 245 posts</div></div>
          <div className="line3 w-full border border-gray-800"></div>
          <div className="content flex relative">
            <div><span class="material-symbols-outlined m-2 hover:cursor-pointer" style={{ fontSize: "50px" }}>
              account_circle
            </span></div>
            <div className="flex gap-1 relative hover:cursor-pointer">
              <div className="font-bold py-2 hover:cursor-pointer hover:underline">Cristiano Ronaldo</div>
              <div className="verify text-blue-600 py-2"><span class="material-symbols-outlined">
                verified
              </span></div>
              <div className="Cr7 text-sm text-gray-500 py-2.5">@cristianoCR7</div>
              <div className="dot py-0.5 text-gray-500">.</div>
              <div className="hr py-2 text-gray-500">10h</div>
              <div className="py-2 relative left-40"><svg viewBox="0 0 33 32" aria-hidden="true" class="hover:cursor-pointer invert w-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd"><g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g></svg>
              </div>
              <div className="py-1.5 relative left-41"><span class="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
          </div>
          <div className="para px-10 relative bottom-9 left-6 hover:cursor-pointer">Cristiano Ronaldo is a Portuguese football legend known for his incredible goal-scoring, athleticism, dedication, and winning mentality. A five-time Ballon d’Or winner, he has achieved success with top clubs and the Portugal national team, inspiring millions of fans around the world.
          </div>
          <div className="w-130 relative left-16 hover:cursor-pointer"><img className="rounded-2xl" src="https://www.aljazeera.com/wp-content/uploads/2014/01/2014113192511431734_20.jpeg?resize=1920%2C1440" alt="" /></div>
          <div><ul className="flex justify-between mx-16 text-gray-500 m-4 relative hover:cursor-pointer">
            <li className="flex text-sm gap-1"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              mode_comment
            </span><div className="relative bottom-0.5">900K</div></li>
            <li className="flex text-sm gap-1 relative left-5"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              repeat
            </span><div className="relative bottom-0.5">1.5K</div></li>
            <li className="flex text-sm gap-1 relative left-9"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              favorite
            </span><div className="relative bottom-0.5">1M</div></li>
            <li className="flex text-sm gap-1 relative left-15"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              bar_chart
            </span><div className="relative bottom-0.5">500K</div></li>
            <li className="flex text-sm gap-1 relative left-20"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              bookmark
            </span></li>
            <li className="text-sm flex gap-1 relative left-12"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              upload
            </span></li>
          </ul></div>
          <div className="line4 w-full border border-gray-800"></div>
          <div className="content flex relative hover:cursor-pointer">
            <div><span className="material-symbols-outlined m-2" style={{ fontSize: "50px" }}>
              account_circle
            </span></div>
            <div className="flex gap-1 relative">
              <div className="font-bold py-2 hover:underline">Cillian Murphy</div>
              <div className="verify text-blue-600 py-2"><span className="material-symbols-outlined">
                verified
              </span></div>
              <div className="Cr7 text-sm text-gray-500 py-2.5">@cillian_murphyR</div>
              <div className="dot py-0.5 text-gray-500">.</div>
              <div className="hr py-2 text-gray-500">2h</div>
              <div className="py-2 relative left-40"><svg viewBox="0 0 33 32" aria-hidden="true" className="invert w-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd"><g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g></svg>
              </div>
              <div className="py-1.5 relative left-41"><span className="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
          </div>
          <div className="para px-10 relative bottom-9 left-6 hover:cursor-pointer">Cillian Murphy is an Irish actor known for his intense performances and versatile acting. He gained worldwide recognition as Thomas Shelby in *Peaky Blinders* and won the Academy Award for Best Actor for his role as J. Robert Oppenheimer in *Oppenheimer*.

          </div>
          <div className="w-130 relative left-16 hover:cursor-pointer"><img className="rounded-2xl" src="https://cdn.webshopapp.com/shops/268192/files/433182622/tommy-shelby.jpg" alt="" /></div>
          <div><ul className="flex justify-between mx-16 text-gray-500 m-4 relative hover:cursor-pointer">
            <li className="flex text-sm gap-1"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              mode_comment
            </span><div className="relative bottom-0.5">562K</div></li>
            <li className="flex text-sm gap-1 relative left-5"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              repeat
            </span><div className="relative bottom-0.5">830K</div></li>
            <li className="flex text-sm gap-1 relative left-9"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              favorite
            </span><div className="relative bottom-0.5">230K</div></li>
            <li className="flex text-sm gap-1 relative left-15"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              bar_chart
            </span><div className="relative bottom-0.5">456K</div></li>
            <li className="flex text-sm gap-1 relative left-20"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              bookmark
            </span></li>
            <li className="text-sm flex gap-1 relative left-12"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              upload
            </span></li>
          </ul></div>
          <div className="line5 w-full border border-gray-800"></div>
          <div className="content flex relative hover:cursor-pointer">
            <div><span className="material-symbols-outlined m-2 hover:cursor-pointer" style={{ fontSize: "50px" }}>
              account_circle
            </span></div>
            <div className="flex gap-1 relative">
              <div className="font-bold py-2 hover:underline">Monkey D Luffy</div>
              <div className="verify text-blue-600 py-2"><span className="material-symbols-outlined">
                verified
              </span></div>
              <div className="Cr7 text-sm text-gray-500 py-2.5">@SunGodNika</div>
              <div className="dot py-0.5 text-gray-500">.</div>
              <div className="hr py-2 text-gray-500">21h</div>
              <div className="py-2 relative left-43"><svg viewBox="0 0 33 32" aria-hidden="true" className="invert w-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd"><g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g></svg>
              </div>
              <div className="py-1.5 relative left-44"><span className="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
          </div>
          <div className="para px-10 relative bottom-9 left-6 hover:cursor-pointer">Monkey D. Luffy — a fearless pirate with an unbreakable spirit. He dreams of becoming the Pirate King, protects his friends no matter the cost, and never gives up, even when the odds are against him. 🏴‍☠️🔥


          </div>
          <div className="w-130 relative left-16 hover:cursor-pointer"><img className="rounded-2xl" src="https://images.timesnownews.com/photo/msid-153560408/153560408.jpg?thumbsize=48050" alt="" /></div>
          <div><ul className="flex justify-between mx-16 text-gray-500 m-4 relative hover:cursor-pointer">
            <li className="flex text-sm gap-1"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              mode_comment
            </span><div className="relative bottom-0.5">459K</div></li>
            <li className="flex text-sm gap-1 relative left-5"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              repeat
            </span><div className="relative bottom-0.5">780K</div></li>
            <li className="flex text-sm gap-1 relative left-9"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              favorite
            </span><div className="relative bottom-0.5">645K</div></li>
            <li className="flex text-sm gap-1 relative left-15"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              bar_chart
            </span><div className="relative bottom-0.5">234K</div></li>
            <li className="flex text-sm gap-1 relative left-20"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              bookmark
            </span></li>
            <li className="text-sm flex gap-1 relative left-12"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              upload
            </span></li>
          </ul></div>
          <div className="line5 w-full border border-gray-800"></div>
          <div className="content flex relative hover:cursor-pointer">
            <div><span className="material-symbols-outlined m-2 hover:cursor-pointer" style={{ fontSize: "50px" }}>
              account_circle
            </span></div>
            <div className="flex gap-1 relative">
              <div className="font-bold py-2 hover:underline">Jin Mori</div>
              <div className="verify text-blue-600 py-2"><span className="material-symbols-outlined">
                verified
              </span></div>
              <div className="Cr7 text-sm text-gray-500 py-2.5">@Jin_Mori</div>
              <div className="dot py-0.5 text-gray-500">.</div>
              <div className="hr py-2 text-gray-500">14h</div>
              <div className="py-2 relative left-63"><svg viewBox="0 0 33 32" aria-hidden="true" className="invert w-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd"><g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g></svg>
              </div>
              <div className="py-1.5 relative left-64"><span className="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
          </div>
          <div className="para px-10 relative bottom-9 left-6 hover:cursor-pointer">Jin Mori — a fearless fighter with an unstoppable spirit. 🥋🔥
            He fights for his friends, embraces every challenge, and never backs down from an opponent. Behind his carefree smile lies the strength and will of the legendary Monkey King. 🐒⚡
          </div>
          <div className="w-130 relative left-16 hover:cursor-pointer"><img className="rounded-2xl" src="/Jin_mori.png" alt="" /></div>
          <div><ul className="flex justify-between mx-16 text-gray-500 m-4 relative hover:cursor-pointer">
            <li className="flex text-sm gap-1"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              mode_comment
            </span><div className="relative bottom-0.5">334K</div></li>
            <li className="flex text-sm gap-1 relative left-5"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              repeat
            </span><div className="relative bottom-0.5">500K</div></li>
            <li className="flex text-sm gap-1 relative left-9"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              favorite
            </span><div className="relative bottom-0.5">532K</div></li>
            <li className="flex text-sm gap-1 relative left-15"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              bar_chart
            </span><div className="relative bottom-0.5">150K</div></li>
            <li className="flex text-sm gap-1 relative left-20"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              bookmark
            </span></li>
            <li className="text-sm flex gap-1 relative left-12"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              upload
            </span></li>
          </ul></div>
          <div className="line5 w-full border border-gray-800"></div>
          <div className="content flex relative hover:cursor-pointer">
            <div><span class="material-symbols-outlined m-2 hover:cursor-pointer" style={{ fontSize: "50px" }}>
              account_circle
            </span></div>
            <div className="flex gap-1 relative">
              <div className="font-bold py-2 hover:underline">Kurosaki Ichigo</div>
              <div className="verify text-blue-600 py-2"><span class="material-symbols-outlined">
                verified
              </span></div>
              <div className="Cr7 text-sm text-gray-500 py-2.5">@Kurosaki_Ichigo</div>
              <div className="dot py-0.5 text-gray-500">.</div>
              <div className="hr py-2 text-gray-500">24h</div>
              <div className="py-2 relative left-36"><svg viewBox="0 0 33 32" aria-hidden="true" className="invert w-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd"><g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g></svg>
              </div>
              <div className="py-1.5 relative left-37"><span className="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
          </div>
          <div className="para px-10 relative bottom-9 left-6 hover:cursor-pointer">A warrior who carries the weight of protecting everyone he loves. ⚔️🔥
            He fights not for glory, but to protect those who matter to him. With an unbreakable will and the courage to face any enemy, he keeps moving forward no matter how difficult the battle becomes. 🖤

          </div>
          <div className="w-130 relative left-16 hover:cursor-pointer"><img className="rounded-2xl h-200 w-150" src="/Bleach.jpg" alt="" /></div>
          <div><ul className="flex justify-between mx-16 text-gray-500 m-4 relative hover:cursor-pointer">
            <li className="flex text-sm gap-1"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              mode_comment
            </span><div className="relative bottom-0.5">394K</div></li>
            <li className="flex text-sm gap-1 relative left-5"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              repeat
            </span><div className="relative bottom-0.5">234K</div></li>
            <li className="flex text-sm gap-1 relative left-9"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              favorite
            </span><div className="relative bottom-0.5">567K</div></li>
            <li className="flex text-sm gap-1 relative left-15"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              bar_chart
            </span><div className="relative bottom-0.5">478K</div></li>
            <li className="flex text-sm gap-1 relative left-20"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              bookmark
            </span></li>
            <li className="text-sm flex gap-1 relative left-12"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              upload
            </span></li>
          </ul></div>
        </div>
      </div>
      </div>
      <div className="w-[30%]">
      <div className="third shrink-0 sticky top-0 h-fit">
        <div className="searchsomething sticky top-0 backdrop-blur z-2">
          <div className="search m-3 -my-4 rounded-full w-80 relative bottom-5"><span className="material-symbols-outlined top-10 relative left-3">
            search
          </span><input type="text" placeholder="Search" className="w-85 rounded-full p-2 border focus:border-blue-600 focus:border-2  border-gray-800 outline-none pl-10 text-sm" /></div>
        </div>
        <div className="box border border-gray-800 my-10 w-85 rounded-2xl space-y-2 m-3 p-4">
          <div className="font-bold text-xl">Subscribe to Premium</div>
          <div className="para text-sm">Get rid of ads, see your analytics, boost your replies and unlock 20+ features.</div>
          <div><button className="font-bold bg-blue-500 rounded-full p-2 w-30 my-1 hover:cursor-pointer">Subscribe</button></div>
        </div>
        <div className="Todays News border border-gray-700 w-85 m-3 rounded-2xl p-2 relative space-y-4 -my-5">
          <h1 className="font-bold text-xl px-2">Today's News<span className="material-symbols-outlined relative left-40 top-1" style={{ fontSize: "20px" }}>
            close
          </span></h1>
          <div>
            <div className="px-2 font-bold hover:cursor-pointer">Starship Reaches Orbit and Deploys Starlink Satellites in Historic Flight</div>
            <div className="multipleProfile flex gap-1 px-2 text-sm text-gray-600 my-1 hover:cursor-pointer">
              <div><span className="material-symbols-outlined text-white hover:cursor-pointer">
                account_circle
              </span></div>
              <div>1 day ago</div>
              <div className="-my-1">.</div>
              <div>News</div>
              <div className="-my-1">.</div>
              <div>281K</div>
              <div>posts</div>
            </div>
          </div>
          <div>
            <div className="px-2 font-bold hover:cursor-pointer">SpaceX Starship Flight 14 Achieves First Orbital Flight and Deploys 26 Starlink V3</div>
            <div className="multipleProfile flex gap-1 px-2 text-sm text-gray-600 my-1 hover:cursor-pointer">
              <div><span className="material-symbols-outlined text-white">
                account_circle
              </span></div>
              <div>2 days ago</div>
              <div className="-my-1">.</div>
              <div>News</div>
              <div className="-my-1">.</div>
              <div>308.4K</div>
              <div>posts</div>
            </div>
          </div>
          <div>
            <div className="px-2 font-bold hover:cursor-pointer">Anthropic Launches Faster Claude Sonnet 5.5 Model
            </div>
            <div className="multipleProfile flex gap-1 px-2 text-sm text-gray-600 my-1 hover:cursor-pointer">
              <div><span className="material-symbols-outlined text-white">
                account_circle
              </span></div>
              <div>3 days ago</div>
              <div className="-my-1">.</div>
              <div>News</div>
              <div className="-my-1">.</div>
              <div>132.2K</div>
              <div>posts</div>
            </div>
          </div>
        </div>
        <div className="whats border border-gray-700 w-85 rounded-2xl p-2 m-3 my-9 space-y-3">
          <div className="font-bold text-xl p-2">What's happening</div>
          <div>
            <div className="flex gap-2 text-sm text-gray-600 mx-2 hover:cursor-pointer">
              <div>Entertainment</div>
              <div>.</div>
              <div>Trending</div>
              <div className="mx-25"><span className="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
            <div className="font-bold -my-2 mx-2 hover:cursor-pointer">#RajkummarRao</div>
          </div>
          <div className="my-7">
            <div className="flex gap-2 text-sm text-gray-600 mx-2 hover:cursor-pointer">
              <div>Anime</div>
              <div>.</div>
              <div>Trending</div>
              <div className="mx-37"><span className="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
            <div className="font-bold -my-2 mx-2 hover:cursor-pointer">#OnePiece</div>
          </div>
          <div className="my-7">
            <div className="flex gap-2 text-sm text-gray-600 mx-2 hover:cursor-pointer">
              <div>Sports</div>
              <div>.</div>
              <div>Trending</div>
              <div className="mx-37"><span className="material-symbols-outlined">
                more_horiz
              </span></div>
            </div>
            <div className="font-bold -my-2 mx-2 hover:cursor-pointer">#CristianoRonaldo</div>
          </div>
          <div className="text-blue-500 mx-2 my-2 hover:cursor-pointer" >Show more</div>
        </div>
        <div className="Who's border border-gray-600 rounded-2xl w-85 mx-3 p-2 space-y-2 relative bottom-5">
          <div className="text-xl font-bold mx-2">Who to follow</div>
          <div className="flex hover:cursor-pointer">
            <div><span className="material-symbols-outlined " style={{fontSize:"50px"}}>
              account_circle
            </span></div>
            <div className="font-bold">Cristiano Ronaldo</div>
            <div className="mx-1 my-0.5"><span className="material-symbols-outlined text-blue-600" style={{fontSize:"20px"}}>
              verified
            </span></div>
            <div><button className="bg-white p-1 rounded-full w-20 text-black font-bold relative left-6 top-2">Follow</button></div>
          </div>
          <div className="mx-13 relative bottom-11 text-gray-600 hover:cursor-pointer">@cristianoCR7</div>
           <div className="flex relative bottom-6 hover:cursor-pointer">
            <div><span className="material-symbols-outlined" style={{fontSize:"50px"}}>
              account_circle
            </span></div>
            <div className="font-bold">Amitabh Bachchan</div>
            <div className="mx-1 my-0.5"><span className="material-symbols-outlined text-blue-600" style={{fontSize:"20px"}}>
              verified
            </span></div>
            <div><button className="bg-white p-1 rounded-full w-20 text-black font-bold relative left-4 top-2 hover:cursor-pointer">Follow</button></div>
          </div>
          <div className="mx-13 relative bottom-17 text-gray-600 hover:cursor-pointer">@amitabh_bach</div>
          <div className="flex relative bottom-11 hover:cursor-pointer">
            <div><span className="material-symbols-outlined" style={{fontSize:"50px"}}>
              account_circle
            </span></div>
            <pre className="font-bold text-lg">Salman Khan</pre>
            <div className="mx-1 my-0.5"><span className="material-symbols-outlined text-blue-600" style={{fontSize:"20px"}}>
              verified
            </span></div>
            <div><button className="bg-white p-1 rounded-full w-20 text-black font-bold relative left-12 hover:cursor-pointer">Follow</button></div>
               <div className=" relative top-5 right-54 text-gray-600">@Khan_salman</div>
          </div>
          <div className="relative bottom-6 mx-2 h-3 text-blue-500 hover:cursor-pointer">Show more</div>
          
        </div>
        <div className="flex mx-2 text-[12px] text-gray-500 gap-3 px-5">
          <div>Terms</div>
          <div className="relative bottom-1">.</div>
          <div>Privacy</div>
          <div className="relative bottom-1">.</div>
          <div>Cookies</div>
          <div className="relative bottom-1">.</div>
          <div>Accessibility</div>
          <div className="relative bottom-1">.</div>
        </div>
        <div className="flex text-[12px] text-gray-500 space-x-2 px-7 ">
          <div className="flex">
          <div>Ads Info</div>
          </div>
          <div className="relative bottom-1">.</div>
          <div className="flex gap-1">
          <div>More</div>
          <div className="relative bottom-1">...</div>
          </div>
          <div className="flex gap-0.5">
          <div>&copy;</div>
          <div>2026</div>
          <div>X</div>
          <div>Corp.</div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default App