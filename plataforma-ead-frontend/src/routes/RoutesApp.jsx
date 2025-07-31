import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import DashboardAluno from '../pages/DashboardAluno';
import CursoDetalhes from '../pages/CursoDetalhes';
import DashboardInstrutor from '../pages/DashboardInstrutor';
import DashboardAdmin from '../pages/DashboardAdmin';
import Courses from '../pages/Courses';
import NotFound from '../pages/NotFound';
import CursoAulas from '../pages/CursoAulas';
import QuizCurso from '../pages/QuizCurso';


import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/curso/:id" element={<CursoDetalhes />} />
        <Route path="/curso/:id/aulas" element={<CursoAulas />} />
        <Route path="/curso/:id/quiz" element={<QuizCurso />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/aluno"
          element={
            <PrivateRoute>
              <DashboardAluno />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/instrutor"
          element={
            <PrivateRoute>
              <DashboardInstrutor />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/admin"
          element={
            <PrivateRoute>
              <DashboardAdmin />
            </PrivateRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route path="/aluno/cursos" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
