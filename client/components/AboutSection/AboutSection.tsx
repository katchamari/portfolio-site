import Link from "next/link";
export default function AboutSection() {
  return (
    <section>
      <h2>About me</h2>
      <p>
        I&apos;m Momo, but you can also call me Momie! (he/they) I&apos;m a web
        developer and artist based in California. I&apos;m fully capable of full
        stack programming, but my passion is in front end. I&apos;ve been
        working professionally in web development for over 6 years now, and was
        unfortunately forced to resign at my previous employment because none of
        the employees were being paid for two months. I&apos;m seeking freelance
        work in order to make ends meet until I can find a more permanent
        position again.
      </p>

      <h2>My Hobbies</h2>
      <p>
        In my spare time, I enjoy spending time with my husband, drawing, coding
        fun projects, learning languages, video games, anime and manga, and
        spending quality time with friends! I am currently learning Spanish so I
        can communicate better with my husband&apos;s family, and Japanese
        because that&apos;s my own background.
      </p>

      <h2>My Favorites</h2>
      <p>
        My favorite food is curry udon, and it&apos;s probably also my favorite
        thing to cook because it happens to be super easy.{" "}
        <Link href="https://www.justonecookbook.com/curry-udon/">
          Here is the recipe I use.
        </Link>
      </p>
      <p>
        My favorite video game of all time is a Capcom game for the Nintendo DS
        called Ghost Trick. It&apos;s created by the same person who created the
        Ace Attorney series, which I also love.
      </p>
      <p>
        My favorite anime and manga of all time are Dungeon Meshi and Mob Psycho
        100. I have read the manga and watched the anime for both, and I collect
        merch and figures.
      </p>
      <p>My favorite musicians/bands are Masayuki Suzuki and ALI.</p>
    </section>
  );
}
