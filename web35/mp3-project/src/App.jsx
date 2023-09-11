import { useEffect, useRef, useState } from "react";
import PLayer from "./components/PLayer";

const song = [
  {
    id: 1,
    title: "Đường vào tim em",
    owner: {
      name: "T.A.P, DUTXUZ",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHucyKHSHEEBGcBx4sHhci-Lj_xl9zAEQfEQ&usqp=CAU",
    },
    cover:
      "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/a/f/a/8/afa808b7b6112cf56cd73c4695891eab.jpg",
    src: "CuoiThoi-MasiuMasew-7066112.mp3",
  },
  {
    id: 2,
    title: "Lửng lơ(Remix)",
    owner: {
      name: "Masew, B Ray, Ý Tiên, RedT",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhgVEhUZGBgZHBocHBoYGBgYGBwYHBgZGRgYGBkcIS4lHB8rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDE0NDY0NDQ0NDY0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAD4QAAEDAQYEAwYEBQMEAwAAAAEAAhEDBAUSITFBBlFhcSKBkRMyobHB8CNC0eEHFFKi8TNikhUWgsIkU3L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQACAgICAgEDBAMAAAAAAAAAAQIRAyESMQRBEyJRcTJhgaFSsdH/2gAMAwEAAhEDEQA/APK05CFmeuCAhCABKhKgYICE4BIBEqWEIsbdKxHvDdUxtQuMNy+f7KJ4jxOIJ5eU/JOAIYTuQT5mPpKao4smeT0tFhtYZ8hoPv1SOrsOomO8Kk2cOX7dSlDY1lx+H7qzlo0f5Uk5HUA5gabdfvoqwY8OjPsc0ynXdOIk9t9NvRXrNamciDyGvzz7o0JNx2is6qAYOScnVbO18lnhOsEH9dVBRqz4Xaj0UuJ2YM7b4yJISJxSKTuoRIlQgKGoSpEBQiEqEBQiEqRAAhKhACISQlTIBKkSoGCVIlCQCpUBAQOhQoK9TYJ9Z8BVabiT12y36JpHNnnS4jywyA/llHnqpqVN7gAB9xCkpgEiMyf1XT3LYm4cRGaUpUjkjFyZl0OHqlQAkx3V9nCZDfeM78l1dlpRC1KNKVi8kjdY4nnf/bD5yIHefmojwtXzAa07gg6/qvUm2UHZTMsAGYEI+SQPHE8bqXbXow6o1wbzjIdyNFQtLiDOLTaPuV7hXsLXNIcAQeYXn3F3DIpsNWkPCPebyE6jotI5b0zKWKto5UOxCeaaU5ggRy/yEhVM9LG+UUxISJUILoRCVCAoahKhAqGoTkiQUIhKhAUNQhKqIBCEJDFCVIEqBihASBKEDojtJ8KgoUydPv7lWa4lpVm6bOHDNTKXGNnJnjc1+AsVHxCF1t3nC3NULqu8lxOw9D+yuW+s2lJcdh6rneXlLihLHxjbNuzVZW1YziXmzeJ3DJrP1K1LBxs5pAfT/uWnxyI+RHpVJimc2FlXJxDTrt0g7rYfaWblLjQrK1QrOt9IPY5rhIIII7qhfPFjKLi3AXRyWG/i1ztKbgOv7aI4Se0Pml2cTa7N7Oo5n9JI8tlXWxxDUa+pjZo9rXeYJaQeuSyFvdnT4q+l/kahKkQdNAhCEgoEIQgKEQlQgVCISwhIKGIQlVGYIKEqBiJUiVBQoQhCAB/unstS5mQ0+nnOSgZYCaYcXNBdJaz8xAJBdHKQfQq1dUEEQZZmexgT65ea587Ti6Mci+pM7exWcMosw77rFvuyMBa+oZLpwt2yykrpqLJoMjlP1XKXrZX1XYspGQBkwJOQC8/xrlO7LzUo0Ou+y0n6MaCeklF5XA0ZsyPURPmscXQXy2rUe09WEjyAyXSWLhlj6bRTqvY4EkvawtDpMgFkhuXZen/Jw/wULktDqT8BEEbLrq1V7aeODCwrddppvZLsTgPEYiTPL71XXWdvtLNB00UtmqRxjKbKlTHVIaJ3/fRb9NlmLcLMDuoLXfIlZl98OUnvxOFUjYNALRltqZ6qvQ4eouaAGV8UyHkODpgD34mMk7Vdk070jG4vsTadRppiGvBy5EET8wucXpN4WGnTog2sF7WAnP3pIgDLU6BefW1jW1HBuTQchMwNYneNFUZXo68FJUVkJUKzehEIQgASJUIFQiEqEgoRCVCAoYhIhUZDkIQgoEqRKgAQhCBmvbaEtpub/wDW0yNiGiT08RK1eE2NtFWqD7z6LstJcC0kjvE+qo3VUD6Ra4+417fJ3jZ/e2PMc0nD9s/l6oeB4gW6705d7Vo6kR/xK48tuLiuxS27Z6XdVAGkwcm5rEtjPZ1o2W3Ya2F7mbAyP/yVncQloGPKQV5fjSccu+mLJG0zRsdNrwFfdZmsbO65+7bbkClvu9yKbsBzDTHeF66ORmfeVoDqmhOeuy6q5aeKkQNhK8xZxO0MgiT96rSuni0sb4pA6fJPixcr6PQaNQAw74rRLWxIAXCXNxGLWXMawgjOToBsVoWa+C1xY45j5JdFNWT3zH5gInOdI3+EryO01cb3v0xOc6OUkmPivS+ILUH0HgHPA8/2OXl6vH0dGBdghCFodAJEqEACEIQAIQhAUCEJUDogQhKqOcEqEIKBCEIAVCEIGWbFaDTdMSCC1zf6mnUdNAQeYC075LX4H0vca1jWnQiBo6PzD6LDTmuI0OqynjtprsTVqj1Lh63CrZ6dQ5uDSx/PE0wJ6kQfNYnEFtLpbstS4cIsdNzGhuJoxQAJe2WEmNScOq52+m+Inr8F5MIx+aX5HNNQJ7lqudIGymtNVjSRUdluSs24bWGVMLtHgtP0U1+XN7R8teQ7+lxhrh0P5T8F6i7OD0Qv/kHHUz6LQut13Uzj8U8nNB9DMKpc920qZ/Gs73uAfoJEgjCRB1InddhRu6yVM22FwxsDcX4bQM8jBfkctYV0K0u0U7Lf9jEinhZPKPKYVC8SHV2OpnUEGOUSD981TvS46NWtgosdTEy58QB4gMIzkmGnn72uy0/5Jtmp5Tl4W4jJjckqGki7Mq/LX7Ok4HNzwWDoDGI+nzXILQvq1+1qRs3Id9/vos4K4qkdmGPFfkVCEKjYEIQgAQlQgAQhCBghCEh0QISJVZyochIlQUCVIlQAIQhAwQhCQHonB9THYC0/le9vqA7/ANllXuzNWeC3zY68H3XA+rR+gWQ+9AXFr+eq8rg/mk0E5R4pMz3NIdIXRNqGqxp3GRWVVpA+JuatWC1NbrkuuORNHHKDTLFOpUY7Q9Dmt+yXs4CHUgTzwj4pl32yk/J0FdHZ30g0aLSwtpGLZmOqVMTmwB0gLL4ytuAZHPQdzqV1ZqB7i2nBPwHcrhOK7jtbquP2Ze3b2fjI38TQMQ7xGSUdvZcUnJWcihOcwtJDgQRqCII7gpq2O0EIQgYJUiVAAgIQkMEISoGCEIQMrJUiFZxipUiVA0KhCEFCoSIQMVOc3wF0a5fqfvmnUqeIx6nkFLbqjQ3CNBkANe5WcntJGGaajFo6rg2iWXbWcfzPMdg0D5yuNtObj3K07mv99Ok6zwHMJJGzmk+9B3E5wqdanMlYwg45JSl7Zg5qUEl6ILPbHsyacuRzVj/qM6iDzGYVIthbFwcP1bY/DTEN/M8jwjt/Ueg+C1lGPbRKlLpMhsdZ73htLE97jk1oJPovRrg4arwH2t8bimDP/N2/YZdSti5bhoWFkMHiPvPdm49zy6DJWrwvJjabhTdifBDWt8TidMgM1FWXbqkULC/8N78oD3RAAAazL6E+as2Iv9nr43yT0nQHsIHkpLtshbRaxw2h0/GZVe+7/s9iaJMvOjW5uPkko7JcixaeH7PWbFem15/qOT/JwghcxeX8PaT5Nne5h2DvG3tsR6lYtfjuq+pMBrOQzdHyldDc3GjKpwFpZH9RknqtEqGpyj0zh724ZtNlBdUpywavZ4mjvu3zAWOvdmWxtQbLIvPhOyWgFxZgefzs8JnmW+6fRO2bQ8r1JHj6F09/cG2iygvZ+LTGZe0QWj/ezbuJHZc0WkRIInSRE7Zc0zqjkjLpiIQhBqKhCEFAhCEAVkJWgkwEolzsNNuM8xMDz+uXmrPOnkjHsGicgpRROm41HLum1LPVYPea3o3XzIEqn7So0zM9QmlZzZfJktRVE7agOhTwq1OH6GHcuakoVZyOqbiKHltfqVkwE6JKhwjQz6D13TiXgQ05bgAA+upSMYD96dzz6IUX7Hk8tvUdC0rRDTlnmPgM/iq8YgSTJKQkY4nI/MKxSaBuhRSZyyySltlamSwgrcazE0EaHNZDmK9ddpzLD3b9R9fVLJG1ZWKVOjRugWam8vtbC8DDhYJwnM4i6MzGWXUrr63G1mpU4otMAQ1jW4QOQGzQuGrMlVjSzWH5OrlSqjbvLiW02w4ceBn9LTH/ACOpRdt41LI8MpPbieQSXdARBOsZrOs1kadWg/D4hQXrZWswuaCJdHvE7E7ppJuhfI4o629b/tTqYiqwS7AcBMgkTlPToqPEFzOo2T2pDnueWgvzdhGsuOwyjzXL0HOB1kEiZ2I0PlJ8iV6twzbBXs5pvjG0QQdiE9xewdtJ0eQNdCsMqkZgwV2VrtFjrucx7Ax7SQ45McC0kETuZC4u0U4e5rPE0OIDtJAORVdiSfS2dbw9xG5sMqabGV2NkvxtVwp03DEdM144HObrI6rXuyq2mRUpvIe3OSfghxJbp00ey/zeBhxnwgeKeW68kvagHVHmmWMa5/hY94aACcgHHIDPMzAPqrd68Z+38OBwAA8MxLoMvd21Az69Me5rpq3hXwMOQ8T3kSGj9TsFcY8VbMXN2uJVcYMHI5bg5ESMwSEqqW+zPs1d1Oq2HNMEbRsWncEZgpWvLeo+nRDhe0duLzmnWRfyWkJrHg6JyzPSjJSVoEIQgov2K63VKcA4cZl7j+SkMx5ucP7RsVPe9MUGBrHBjdmtAL3RvrkP9x1XY2mzNFNtKgBgDXVHe7mGw1hOLYBuQOw335LiAUaTcIAdVcZc9zi5wjKJOgGmUSRAgArjx5/kml/X/TyskfpcvZzmDESIeT3+fJWbNZxORnLeCJ+uaifXc4YAQG7wIU9mfgXbOTS0csIpvZUIBfhcADO2Udk6pZMThgnFMQBJJOg7ym3g/wDEnsZW9wfXZStFOrUIIl2R2MGHffNE8jjDkvt1+4RgnLidFYOG6NOmx9rlrolwLsvRY173jYw8fy1HGQROuExsr1rqOve1uDSW0GZGN11tiuWhRYG02DLchc8MukpP6va+xtLFf6VS+5xdmvVlOm4/yrJdMtLZgmNMvos17aRp/ieB+xDSF6U6gzcAeQQLuY8ThaY6BarPWqIfjp7s8kq2Rwph8eAmAeqpOyzBg816k2vQdV9jUpjDOXJaNq4PsdQSGASNslazL2iHga6Z5JQvHaoJ6jXzC0LM5lT3XA9Jz9Cuot38O2OYXUHkO2BzC8+vCwPoVCyq3C4encJpRl0Dco97Ots1lI7LN4ieGtpM/NJe7pMhv1XP0ra9nuPc3oHGPTRPtFpdU8b3YnSBPQCNsk1CnYpZLjRN2K3LhvZ1J7XyQWw1wG7dGujppPIhYTXSVKx5a4ObqNjoRuD0/VVKPJfuPHl46l0dNxjZ2mo200/dqe90eBr5j5Fc4FevG+Wvs/smMjNrp5Fs5gcyDBWNZqx3UKDo7YeXCLUX19yzWnCY/wAjdUqTziA5ZxnBBEf47q8agVC1Mlww79N1cUzLzJQk1KLskwmpUhuUxJgawJXrnB1nZQohrBE5k7k8yd14/Z3lpg5HZegcL3zIDScwoyWc+Oi7/Eu5m1aQtDB42ZGPzM5HtqPNeY0HyMJ1Gn6L223vFSi5pzBBXi1rs/s6xbyP1TxS9Cyx9g1xaZCuMcHCQqjhKdSdhPTdVONmvi+R8cql0/6LaE32reaFnxZ63z4v8jvqsCg1lMA18LQ4knwsBhpbGrobiH9OuRwrieKWMbVim5z4DcTnACXcmgaNAgALsHcQUqZLKQBJzc86udEegygdF53bq5c907kn1XD4UZ822qX+zzvIlFRoZTtAAPMpX2qQqgKcvT4q7OHkxznk6rUquLabY0H6LI5d1suP4ZynLJTNLRcH2es8J3MyjYqZbGJ7Q5x5kiU5lpLnlo2XI8O8UOZQbTcc2CI6LobuqS4PBycvIxQlDNJ5PfR6Ld41RoXrTwsB5qCwPc1xE5Qrl9vBog8iFVu1+Jdxz2c1bj/8kHquptF4+ypAnkuetVCa7uhUXE9qik1oKbVhZ19xWovZJ3XJfxWsDTTZWGRBg9QVr8KPLqTQVU/iXZ3GyA7NIJThqRM+meRFqc4+EDzTwye3NRuaus4ySnVVptQLOLCnNqEJAaWEFV2tipHQqJlc7aqR1UOcDEQITAvvspFPE0DLpr2VKp4mYhrr2O4Wh7eGkHLQjfKIPx+aptZGMdQfJw/wmShlNwe2Hx0OhCsWKq+k8EZgbg6rJdkU4VDspaTLTa6PRrPxNRFOHvz5QSZ7QuPvKuKlRz2ggbTr8FmNlPrvMAApRio7HKblomY4pXhVWgnVxCmZyMHkf3Vkh6IVn2xQpt/Y044/8v6I7sfNQAnWfWFBa6Ra4znO6ipOwuB5EFa1pph4jzHmspPjK/TKj9UaMUpZTnsLTBTCIWpkBWlZ63hAKzE9tUhKSscXRoueAcUkdl2fC94F1lAnxBxA7TkvO3PJXV8HVPCRyP7rnzQXFN+mjowz20vsz0mq0us5DuSoXJUzWlUJdZnRyWBdD4U0Wnohttow1X91yl9W01HR1WlfFq/EfnusBjZcXnZXFEyZ6fwlSIpN7K1xVYXWmg6k1wDjpK4SwcWvpQAMlN/3i99QOOQU8WitM5e9LmrWN8VR4TuMwVnlsfqvUDfNntbQyuAQea5/ibhdlJntaDpZu3WOy3jO9MwyYmto40tzzSgCFPVYCck6z0JlamBQ0MhSMcS4Tv8AJSvo5kdVHWbBgJDJalozhoSU7SWl06mE6k0NbI15/RV68EyECCtGRHYprHwkaciExAyy07q5Zmtc0tMYplUaBQ95a775lMVGhXsgAluny/ZVCwj7+Cu2a04gm16MZxkUCTKvtOiEvsz9gIQUVZWpZKwc2D7wy8tlmOYWkgiCOafSqFpkLOUeSKi+LJbTmfvJVnNjIqxWAiQfKQSmNGIRvsnHSHJWyuUidvmnilvqFRA1rCdFtXFaPZPidYWQKvLJLReQ4RzUzXKNFwbUkz3G4rV7WgRlovO7Xez6FZ7OTip7Lfz7GQBnIzWJXqG0VH1SNSso1KqNpvjZBXtjqji47pRaobh56qs6Q4xpJ9CnB+Ix81qopGDm2htV0ty2KVjvlKjdSMy3Pocjy8/JPomAYMHIQR6qmkyVJroey0gHIwtCpe73UfZgyHLFtVODiGitWFwiPPyU8FZbzS40SsogCPVPszcyDqpsbWqL2kOlo1jTNWYhXZHiP3yyWTWOcrTtOY0iOazKwQNBTeBII++SbjjLb6KNBKRQBIUIKAJKZz9fkUtcgnLkmAxmENbKAFpvLTIWpQrhw+9FmNbsUrHFjkCas0/ZDn/cUKv/ANQ/2oTFTIq7Nx5/qoFdURocvRQmduXA27iMo1cPnqtS4RTbUc6sJY0THPkFlPp4cyP0R7YwQN1Mo8lS9mKbi9+h9sGJxc0QHEwBtnoqwcQpW1iBHx3CjLcpVpVoiTT2I50qWzDxDaDqomtla920sOKWY9ARyOvnqnVkt0S22mHkFrsQOXwVmxsa0ZAwdz9Ey0vhzQ1hAjQRIPX1Vh74HZEYqPQpTcuzKtFP8Qj0UL2Q7PRSVnHE05eSfXZITJIoIdAO085jPJSMqYtW9tAe4UDXHUaj9IT3PMCBBGXwQA7J3hOXfJVfcI6H4FXX1dZbsqFceHzQNGkyoOXxlODyQQAq9kIc3Pl8VYpGJQJkVod4RzKoVwrNQ4nQFBWGaBorEJqfGSYkUCUhIlCAET2OggphQgC2CCo6jVE0wrVIh4g5FAivgHNCt/yDkJ0FllKhCyPUH1f9L/yd8mqihCcTizfqEcldohCsxLtm2Vq6/wDUPcfIIQmSySv/AKh8vkFK/wB31+SEJkmXX27j5Kb8qEIGVdwnv+pSISGWHe6FSd7pQhAIfZdD97K23VCECYw+8eyqVdUqEDREmIQkUCEIQMChCECBDdUIQBfQhCYj/9k=",
    },
    cover:
      "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/a/f/a/8/afa808b7b6112cf56cd73c4695891eab.jpg",
    src: "LungLoRemix-MasewBRayREDTYTien-8545548.mp3",
  },
];

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const togglePlay = () => {
    if (currentSongIndex === -1) {
      setCurrentSongIndex(1);
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    setCurrentSongIndex((currentIndex) =>
      currentIndex === 0 ? song.length - 1 : currentSongIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentSongIndex((currentIndex) => (currentIndex + 1) % song.length);
  };

  const selectSong = (id) => {
    const songIndex = song.findIndex((item) => (item.id = id));

    if (songIndex !== -1) {
      setCurrentSongIndex(songIndex);
    }
  };

  useEffect(() => {
    if (currentSongIndex !== -1) {
      const currentSong = song[currentSongIndex];
      audioRef.current.src = currentSong.src;
    }
  }, [currentSongIndex]);

  useEffect(() => {
    if (currentSongIndex !== -1 && isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSongIndex, isPlaying]);

  const currentSong = song[currentSongIndex];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Playlist</h1>
      {song.map((item) => {
        <div key={item.id} onClick={() => selectSong(item.id)}>
          {currentSong && currentSong.id === item.id && "Playing "}
          {item.title} - {item.owner.name}
        </div>;
      })}

      {currentSong && (
        <div>
          <img src={currentSong.cover} alt={currentSong.title} />
        </div>
      )}

      <PLayer
        isPlaying={isPlaying}
        onToggle={togglePlay}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}

export default App;
