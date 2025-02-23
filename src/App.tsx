import "./App.css";
import {
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./theme/theme";
import Navbar from "./components/Navbar";
import { EntryList, EntryWithDetails } from "./components/EntryList";
import { SectionHeader } from "./components/SectionHeader";

import profileImage from "./assets/profile_image.jpg";

const musicSectionEntries: EntryWithDetails[] = [
  {
    title: "『約束タワー』 混声四部合唱 編曲",
    url: null,
    details: [
      "スタァ歌劇団 Théâtre du Planisphère",
      "- 2024/8/18 (日) 副次的文化系合唱祭2024～大宴会～ Day1",
      "- 2024/9/1 (日) 副次的文化系合唱祭2024～大宴会～ Day3",
      '- 2024/12/1 (日) 単独公演#1 "Le Premier Ciel"',
    ],
  },
  {
    title: "『わがままハイウェイ』 混声四部合唱 共同編曲",
    url: null,
    details: [
      "スタァ歌劇団 Théâtre du Planisphère",
      '- 2024/12/1 (日) 単独公演#1 "Le Premier Ciel"',
    ],
  },
];

const appearanceSectionEntries: EntryWithDetails[] = [
  {
    title:
      "スタァ歌劇団 Théâtre du Planisphère" +
      ' 単独公演#1 "Le Premier Ciel"' +
      " (2024/12)",
    url: "https://posfie.com/@Lyon0807/p/gGKSfDP",
    details: [],
  },
  {
    title:
      "副次的文化系合唱祭2024～大宴会～ Day1, Day3" +
      " - スタァ歌劇団 Théâtre du Planisphère (2024/8, 9)",
    url: "https://www.youtube.com/watch?v=SFdrBAJ1Z0g",
    details: null,
  },
  {
    title: "imasjazz 4th Live - imasjazzファンク部 (2024/7)",
    url: "https://x.com/imasjazz/status/1804122320006713617",
    details: null,
  },
];

const engineeringSectionEntries: EntryWithDetails[] = [
  {
    title: "PCにGPIOを生やして遊ぼう (2025/2)",
    url: "https://nor-isio.hateblo.jp/archive/2025/02/12",
    details: null,
  },
  {
    title: "スマブラ自動録画システム (2024/3 〜 2024/4)",
    url: "https://x.com/skb_apos/status/1823272210699837603",
    details: null,
  },
  {
    title: "トランジスタアンプ製作 (2023/12 〜 2024/2)",
    url: "https://x.com/skb_apos/status/1753621582583640435",
    details: null,
  },
  {
    title: "加湿器湿度フィードバック制御 (2022/1)",
    url: "https://nor-isio.hateblo.jp/entry/2022/01/15/115652",
    details: null,
  },
];

const otherSectionEntries: EntryWithDetails[] = [
  {
    title: "京王線沿線ウォーク (2021/4 〜 2021/5)",
    url: "https://nor-isio.hateblo.jp/entry/2021/04/30/220039",
    details: null,
  },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* ツールバーの高さ分のスペースを確保 */}
      <Toolbar />

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {/* プロフィールセクション */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Avatar
            src={profileImage}
            alt="プロフィール画像"
            sx={{
              width: 300,
              height: 300,
              mb: 3,
            }}
          />
          <Typography variant="h4" gutterBottom>
            さか
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            skb_apos / norisio
          </Typography>
        </Box>

        {/* 音楽セクション */}
        <Box sx={{ mb: 6 }}>
          <SectionHeader title="合唱編曲" subtitle="さかべ" />
          <EntryList entries={musicSectionEntries} />
        </Box>

        {/* 音楽出演セクション */}
        <Box sx={{ mb: 6 }}>
          <SectionHeader title="出演" subtitle="さかべ" />
          <EntryList entries={appearanceSectionEntries} />
        </Box>

        {/* 技術セクション */}
        <Box sx={{ mb: 6 }}>
          <SectionHeader title="工学系の遊び" />
          <EntryList entries={engineeringSectionEntries} />
        </Box>

        {/* その他セクション */}
        <Box sx={{ mb: 6 }}>
          <SectionHeader title="その他" />
          <EntryList entries={otherSectionEntries} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
