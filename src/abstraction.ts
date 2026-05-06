// oop - abstraction

// get  idea
// implementation - get after

/**
 * interface
 * abstraction class
 */

// >>> interface

// idea

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log(`Playing the sura Taha Recitation`);
//   }
//   pause() {
//     console.log("Pause the sura Taha Recitation");
//   }
//   stop() {
//     console.log(`stop the sur Taha Recitation`);
//   }
// }

// const Talawat = new MusicPlayer();
// Talawat.play();

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// // implementation
class MusicPlayer extends MediaPlayer {
  play() {
    console.log(`Playing the sura Taha Recitation`);
  }
  pause() {
    console.log("Pause the sura Taha Recitation");
  }
  stop() {
    console.log(`stop the sur Taha Recitation`);
  }
}

const Talawat = new MusicPlayer();
Talawat.play();
