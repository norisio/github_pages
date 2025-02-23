import "./App.css";
import {
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  Link,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./theme/theme";
import Navbar from "./components/Navbar";

import profileImage from "./assets/profile_image.jpg";

type EntryWithDetails = {
  title: string;
  url: string | null;
  details: string[] | null;
};

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
      "副次的文化系合唱祭2024～大宴会～ Day1, Day3" +
      " - スタァ歌劇団 Théâtre du Planisphère (2024/8/18, 2024/9/1)",
    url: "https://www.youtube.com/watch?v=SFdrBAJ1Z0g",
    details: null,
  },
  {
    title: "imasjazz 4th Live - imasjazzファンク部 (2024/7)",
    url: "https://x.com/imasjazz/status/1804122320006713617",
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
          <Stack
            direction="row"
            spacing={2}
            sx={{
              borderBottom: "2px solid #1976d2",
              mb: 2,
              pb: 1,
            }}
            alignItems="baseline"
            justifyContent="center"
          >
            <Typography variant="h5" component="h2">
              合唱編曲
            </Typography>
            <Typography variant="subtitle1">(さかべ)</Typography>
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {musicSectionEntries.map((link) => (
              <div key={link.title}>
                {link.url ? (
                  <Link
                    href={link.url}
                    target="_blank"
                    color="text.secondary"
                    underline="hover"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <Box sx={{ mb: 1 }}>{link.title}</Box>
                )}
                {link.details && (
                  <Box
                    sx={{
                      maxWidth: "600px",
                      color: "text.secondary",
                      fontSize: "0.875rem",
                      textAlign: "left",
                    }}
                  >
                    {link.details.map((detail, index) => (
                      <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                )}
              </div>
            ))}
          </Box>
        </Box>

        {/* 音楽出演セクション */}
        <Box sx={{ mb: 6 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              borderBottom: "2px solid #1976d2",
              mb: 2,
              pb: 1,
            }}
            alignItems="baseline"
            justifyContent="center"
          >
            <Typography variant="h5" component="h2">
              出演
            </Typography>
            <Typography variant="subtitle1">(さかべ)</Typography>
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {appearanceSectionEntries.map((link) => (
              <Link href={link.url} target="_blank" color="inherit">
                {link.title}
              </Link>
            ))}
          </Box>
        </Box>

        {/* 技術セクション */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: 2,
              pb: 1,
              borderBottom: "2px solid #1976d2",
            }}
          >
            工学系の遊び
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link
              href="https://nor-isio.hateblo.jp/archive/2025/02/12"
              target="_blank"
              color="inherit"
            >
              PCにGPIOを生やして遊ぼう (2025/2)
            </Link>
            <Link
              href="https://x.com/skb_apos/status/1823272210699837603"
              target="_blank"
              color="inherit"
            >
              スマブラ自動録画システム (2024/3 〜 2024/4)
            </Link>
            <Link
              href="https://x.com/skb_apos/status/1753621582583640435"
              target="_blank"
              color="inherit"
            >
              トランジスタアンプ製作 (2023/12 〜 2024/2)
            </Link>
            <Link
              href="https://nor-isio.hateblo.jp/entry/2022/01/15/115652"
              target="_blank"
              color="inherit"
            >
              加湿器湿度フィードバック制御 (2022/1)
            </Link>
          </Box>
        </Box>

        {/* その他セクション */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: 2,
              pb: 1,
              borderBottom: "2px solid #1976d2",
            }}
          >
            その他
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link
              href="https://nor-isio.hateblo.jp/entry/2021/04/30/220039"
              target="_blank"
              color="inherit"
            >
              京王線沿線ウォーク (2021/4 〜 2021/5)
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
