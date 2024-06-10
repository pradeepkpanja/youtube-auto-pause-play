
# YouTube Auto Pause Play Extension

A browser extension to automatically pause YouTube videos when the tab is inactive and play them when the tab is active.

## Description

This extension is perfect for multitaskers who frequently switch between tabs or windows. It ensures that your YouTube videos are automatically paused when you're not watching, and they resume playback as soon as you return to the tab.

## Features

- Pauses YouTube video when the tab is inactive.
- Plays YouTube video when the tab is active.
- Works across different windows as well.

## Installation

1. Clone the repository or download the source code.

    ```sh
    git clone https://github.com/yourusername/youtube-auto-pause-play.git
    ```

2. Open your browser (Chrome or Brave).
3. Go to the Extensions page (`chrome://extensions/` or `brave://extensions/`).
4. Enable "Developer mode" using the toggle in the top right corner.
5. Click "Load unpacked" and select the downloaded project directory.

## Usage

1. **Open YouTube:**
   Open a new tab and go to [YouTube](https://www.youtube.com/).

2. **Play a Video:**
   Start playing a video.

3. **Switch Tabs:**
   Switch to another tab and observe that the video pauses.

4. **Return to YouTube Tab:**
   Switch back to the YouTube tab and observe that the video resumes playing.

## Files

- `manifest.json` - Extension manifest file.
- `background.js` - Handles window focus and tab activation.
- `content.js` - Pauses and plays the video based on tab visibility.
- `popup.html` - Extension popup (optional).
- `icon.png` - Extension icon.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.



## Author

- **Pradeep Panja** - [LinkedIn](https://www.linkedin.com/in/pradeep-panja) | [GitHub](https://github.com/pradeepkpanja)

